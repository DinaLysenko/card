import React from 'react';
import img from './images/Rectangle 1.svg'
import './App.css';
import styled from "styled-components";
import {Button} from "./components/Button.styled";
import {myTheme} from "./styles/Theme.styled";
import {Headline} from "./components/Headline";
import {Card} from "./components/Card";
import {CardText} from "./components/CardText";

function App() {
    return (
        <div className="App">
            <Cards>
                <Card>
                    <img src={img} alt={img}/>
                    <Headline>Headline</Headline>
                    <CardText>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                    </CardText>
                    <Button color={'primary'}>See more</Button>
                    <Button color={'secondary'}>Save</Button>
                </Card>
                <Card>
                    <img src={img} alt={img}/>
                    <Headline>Headline</Headline>
                    <CardText>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                    </CardText>
                    <Button color={'primary'}>See more</Button>
                    <Button color={'secondary'}>Save</Button>
                </Card>
                <Card>
                    <img src={img} alt={img}/>
                    <Headline>Headline</Headline>
                    <CardText>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                    </CardText>
                    <Button color={'primary'}>See more</Button>
                    <Button color={'secondary'}>Save</Button>
                </Card>

            </Cards>

        </div>
    );
}

export default App;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  
  @media ${myTheme.media.mobile} {
    flex-direction: column;
    gap: 20px;
    height: 100%;
  }

`





  
 
