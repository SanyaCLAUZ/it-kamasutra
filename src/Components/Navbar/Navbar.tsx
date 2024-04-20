import styled from "styled-components";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div>
      {" "}
      <Navbarr>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="TaskPage">Task</a>
          </li>
          <li>
            <a href="TestPage">Contact</a>
          </li>
          <li>
            {/* <a href="about.asp">About</a> */}
          </li>
        </ul>
      </Navbarr>{" "}
    </div>
  );
};

export default Navbar;

const Navbarr = styled.div`
  background-color: red;
  position: fixed;
  width: 100%;

  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
`;
