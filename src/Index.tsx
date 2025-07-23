import "./Index.css";
import { useNavigate } from "react-router";
import { TypeAnimation } from "react-type-animation";

function Index() {
  const navigate = useNavigate();

  const title = "프라브럼즈";
  const desc = "주어진 문제를 풀고 성취감을 느껴보세요!";

  const handleInit = function () {
    navigate("sub1");
  };
  const handleContinue = function () {
    navigate("sub3");
  };

  return (
    <>
      <h1>{title}</h1>
      {/* <p>{desc}</p> */}
      <TypeAnimation
        sequence={[
          500,
          desc,
        ]}
        cursor={false}
        repeat={0}
        speed={2}
        style={{
          fontWeight: "bolder",
          display: "block",
          width: "400px",
          height: "40px",
        }}
      />

      <div className="btnGroup">
        <button onClick={handleInit}>처음부터</button>
        <button onClick={handleContinue}>이어서 하기</button>
      </div>
      <div className="badgeGroup">
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
        <span>badge1</span>
      </div>
    </>
  );
}

export default Index;
