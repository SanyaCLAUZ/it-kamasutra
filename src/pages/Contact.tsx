import React from 'react';
import styled from "styled-components";

export const Contact = () => {
    return (
        <StyledContactUsButton>
            <form action={"handler.js"} method={""}>
                <div>
                    <label form="email">Your email</label>
                    <input id="email" type="email" placeholder="Your email"/>
                </div>
                <div>
                    <label form="password">Your password</label>
                    <input id="password" type="password" placeholder="Your password"/>
                </div>
                <input type="submit" value="Submit"/>
                <button type="reset" value="">Reset</button>
            </form>

            <div id={"list"}>
                <ol>
                    <li><a href="">Title</a><p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit
                        dolor reiciendis! Distinctio laboriosam porro dicta dolores repudiandae at quae. Quo
                        reprehenderit doloremque, a facilis dolorem laudantium beatae officia?
                    </p>
                    </li>
                    <li>First</li>
                    <li>Second</li>
                </ol>
            </div>
        </StyledContactUsButton>
    );
};

const StyledContactUsButton = styled.div`
    box-sizing: border-box;
    margin-bottom: 5px;

    ol {
        counter-reset: example 1;
        display: flex;
        gap: 20px;
        list-style: none;
    }

    li {
        counter-increment: example 2;
        width: 350px;
        background-color: rgb(70, 167, 241);
        color: white;
        padding: 20px;
        position: relative;
    }

    li::after {
        content: counter(example);
        color: rgba(255, 255, 255, 0.347);
        font-size: 6rem;
        position: absolute;
        right: 10px;
        top: -20px;
    }

    p {
        font-size: 16px;
    }

    form, div {
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    form > div, button {
        margin: 10px;
    }
`