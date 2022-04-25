import React from 'react';
import Appbar from '../components/common/Appbar';

import { ContentArea, SafeArea } from '../styles/common/Area';
import { ProblemArticle } from '../components/common/Article';

const solutionList = [
  String.raw`import java.util.Arrays;
  public class Main {
      public static void main(String[] args) {
          StringBuilder builder = new StringBuilder();
          boolean[] array = new boolean[10001];
          Arrays.fill(array, true);
          int temp;
          for (int i = 1; i <= 10001; i++) {
              temp = d(i);
  
              if (temp < 10001) {
                  array[temp] = false;
              }
          }
  
          for (int i = 1; i < 10001; i++) {
              if (array[i])
                  builder.append(Integer.toString(i) + "\n");
          }
  
          System.out.println(builder.toString());
      }
  
      public static int d(int n) {
          int sum = n;
  
          while (n > 0) {
              sum += n % 10;
              n /= 10;
          }
  
          return sum;
      }
  }
  `,
  String.raw`import java.io.BufferedReader;
  import java.io.IOException;
  import java.io.InputStreamReader;
  import java.util.StringTokenizer;
  public class Main {
      public static void main(String[] args) throws IOException {
          BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
          StringTokenizer st = new StringTokenizer(br.readLine());
          int x = Integer.parseInt(st.nextToken());
          int y = Integer.parseInt(st.nextToken());
          int[][] map = new int[x][y];
          for (int i = 0; i < x; i++) {
              String ln = br.readLine();
              for (int j = 0; j < y; j++) {
                  map[i][j] = ln.charAt(j) - 48;
              }
          }
          Percolate percolate = new Percolate(map);
          System.out.println(percolate.getResult() + "\n");
      }
  }
  class Percolate {
      private int[][] map;
      private int x, y;
      private boolean connected;
      private boolean[][] isVisited;
      private final int dx[] = { 1, -1, 0, 0 };
      private final int dy[] = { 0, 0, 1, -1 };
      public Percolate(int[][] map) {
          this.map = map;
          x = map.length;
          y = map[0].length;
          connected = false;
          isVisited = new boolean[x][y];
          for (int i = 0; i < map[0].length; i++) {
              if (map[0][i] == 1)
                  track(0, i);
          }
      }
      private void track(int x, int y) {
          isVisited[x][y] = true;
          if (x == this.x - 1) {
              connected = true;
              return;
          }
          for (int i = 0; i < 4; i++) {
              int nextX = x + dx[i];
              int nextY = y + dy[i];
              if (nextX < 0 || nextY < 0 || nextX >= this.x || nextY >= this.y)
                  continue;
              if (map[nextX][nextY] == 1)
                  continue;
              if (isVisited[nextX][nextY])
                  continue;
              track(nextX, nextY);
          }
      }
      public String getResult() {
          if (connected)
              return "YES";
          else
              return "NO";
      }
    }
  `,
];

const MainPage = () => {
  return (
    <>
      <Appbar title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemArticle
            title="침투"
            solvedacTier={9}
            problemNo={13565}
            solved
            description="인제대학교 생화학연구실에 재직중인 석교수는 전류가 침투(percolate) 할 수 있는 섬유 물질을 개발하고 있다. 이 섬유 물질은 2차원 M × N 격자로 표현될 수 있다. 편의상 2차원 격자의 위쪽을 바깥쪽(outer side), 아래쪽을 안쪽(inner side)라고 생각하기로 한다. 또한 각 격자는 검은색 아니면 흰색인데, 검은색은 전류를 차단하는 물질임을 뜻하고 흰색은 전류가 통할 수 있는 물질임을 뜻한다. 전류는 섬유 물질의 가장 바깥쪽 흰색 격자들에 공급되고, 이후에는 상하좌우로 인접한 흰색 격자들로 전달될 수 있다. 김 교수가 개발한 섬유 물질을 나타내는 정보가 2차원 격자 형태로 주어질 때, 바깥쪽에서 흘려 준 전류가 안쪽까지 침투될 수 있는지 아닌지를 판단하는 프로그램을 작성하시오."
            mySolutionList={solutionList}
          />
        </SafeArea>
      </ContentArea>
    </>
  );
};
export default MainPage;
