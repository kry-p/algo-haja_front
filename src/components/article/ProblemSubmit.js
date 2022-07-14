/**
 * 문서 구성요소
 */
// React core
import React, { useState } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// React-toastify
import { toast } from 'react-toastify';
// Component
import Spinner from '../common/Spinner';
import {
  Button,
  BackwardButton,
  HoverToUnderlineButton,
} from '../common/Button';
import {
  ArticleWrapper,
  ProblemArticleBlock,
  ArticleParagraphTitle,
  ArticleParagraphDescription,
} from '../../styles/common/Article';

// Icon
import { IoArrowBack } from '@react-icons/all-files/io5/IoArrowBack';
// Module
import { ProblemError404, ProblemTitle } from '../common/Problem';
import { CodeInput } from '../common/Input';
import { addSolve } from '../../lib/api/problem';

const ProblemSubmit = ({ problemId, problem, loading, error }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(``);

  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status == 404) {
      return (
        <ArticleWrapper>
          <ProblemArticleBlock>
            <div>
              <BackwardButton />
            </div>
            <ProblemError404 problemId={problemId} />
          </ProblemArticleBlock>
        </ArticleWrapper>
      );
    }
  }

  // 로딩 중
  if (loading || !problem) {
    return (
      <ArticleWrapper>
        <ProblemArticleBlock>
          <div>
            <BackwardButton />
          </div>
          <Spinner />
        </ProblemArticleBlock>
      </ArticleWrapper>
    );
  }

  // 로딩 완료
  return (
    <ArticleWrapper>
      <ProblemArticleBlock>
        <div>
          <BackwardButton />
        </div>
        <ProblemTitle problem={problem} />
        <ArticleParagraphTitle>문제풀이 등록</ArticleParagraphTitle>
        <ArticleParagraphDescription>
          <div className="disclaimer">
            주의 : 알고하자는 BOJ 채점서버와 연계되지 않으므로 코드의 오류를
            검증할 수 없습니다.
            <br />
            BOJ에서 AC를 받은 뒤 등록을 권장합니다.
          </div>
          <CodeInput code={code} onChange={setCode} />
        </ArticleParagraphDescription>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            accent
            onClick={async () => {
              if (code.length === 0) {
                toast.error('내용이 없습니다.');
                return;
              }
              try {
                await addSolve({
                  problemId: problem.problem.problemId,
                  source: code,
                });
                toast.info('풀이가 추가되었습니다.');
                navigate(-1);
              } catch (err) {
                if (err.request.status === 409)
                  toast.error(
                    '풀이를 추가할 수 없습니다. 동일한 풀이가 있습니다.'
                  );
                else
                  toast.error(
                    '풀이를 추가할 수 없습니다. 서버가 다운되었을 수 있습니다.'
                  );
              }
            }}
            text="등록하기"
          />
        </div>
      </ProblemArticleBlock>
    </ArticleWrapper>
  );
};

export default ProblemSubmit;
