import "styled-components";

// styled components의 테마 정의를 확장하기
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
