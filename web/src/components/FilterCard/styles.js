import styled from "styled-components";


export const Container = styled.div`
width:260px;
height:60px;
background:${props => props.actived ? '#ee6b26' : '#20295f'};
border-radius:5px;
padding:10px;
cursor: pointer;

display:flex;
flex-direction:column;
justify-content:space-around;

img{
  width:25px;
  height:25px;
  background-color:#fff;
  border-radius:10px;
}

span{
  color:#fff;
  font-weight:bold;
  align-self: flex-end;
  font-size:18px;
}
&:hover{
  background:#ee6b26;
}

`
