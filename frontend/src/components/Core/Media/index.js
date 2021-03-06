
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import PostBox from '../PostBox'
import MediaSideNavComponent from '../MediaSideNavComponent'


const Wrapper = styled.section `
    height:100vh;
    margin-bottom:100px;
`
const InnerWrapper = styled.div `
    display:grid;
    grid-template-columns: 100px 1fr ;
    grid-template-row: auto auto;
    text-align: center;
`
const MainDiv = styled.div `
    display:grid;
    grid-gap: 5px;
    padding:10px;
    height:100vh;
    grid-template-columns: auto auto auto;
    grid-template-row: auto auto auto ;
    background-color:${(props) => props.color};
`
const Text = styled.p `
    color: blue;    
`
class MediaComponent extends React.Component {

  render() {
    return (

        <Wrapper>
            <InnerWrapper>
                <MediaSideNavComponent>
                </MediaSideNavComponent>
                    <MainDiv color="white">
                            Media
                    </MainDiv>
           </InnerWrapper>
        </Wrapper>

    )
  }
}
export default withRouter(MediaComponent);



