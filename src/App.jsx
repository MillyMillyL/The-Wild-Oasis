import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: red;
  text-transform: capitalize;
  background-color: yellow;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  display: block;
`;

const StyledApp = styled.div`
  background-color: skyblue;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>the wild oasis</H1>

      <Button onClick={() => alert("checked in")}>Check In</Button>
      <Button onClick={() => alert("Checked out")}>Check Out</Button>
      <Input type="number" placeholder="Number of Guests" />
    </StyledApp>
  );
}

export default App;
