import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommand = (props) => {
    return (
        <Container>
            <h4>Recommand for you</h4>
            <Content>
                <Wrap>
                    <Link to='/'>
                        <img src="https://mickeyblog.com/wp-content/uploads/2021/02/Mickey-50th-anniversary.jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://mickeyblog.com/wp-content/uploads/2021/02/Mickey-50th-anniversary.jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://mickeyblog.com/wp-content/uploads/2021/02/Mickey-50th-anniversary.jpeg" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://mickeyblog.com/wp-content/uploads/2021/02/Mickey-50th-anniversary.jpeg" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56%;
    border-radius: 10px;
    box-shadow: -3px 14px 24px -7px rgba(0,0,0,0.75);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: -3px 14px 24px -7px rgba(0,0,0,0.75);
        transform: scale(1.05);
    }
`;

export default Recommand;

