import styled from "styled-components";
import {ImgHTMLAttributes} from 'react';

export const SingleCardContainer = styled.div`
    flex: 1;
    border: 0.25px solid lightgray;
    text-align: center;
    padding: 16px;
    background-color: white;
    height: max-content;
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    border-radius: 8px;
`;




export const SingleCardImage = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
    width: 200px;
    height: 200px;
    border-radius: 8px;
    border: 0.5px solid lightgray;
    
`;


export const SingleCardUpper = styled.h3`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: inherit;
    
    .title{
        text-align: left;
        font-weight: 700;
        font-size: 16px;
    }
    .like-icon{
        font-size: 8px;
        align-content: center;
    }
`;

export const SingleCardBody = styled.div`
    height: max-content;
    width: inherit;

    .upper-desc{
        height: 24px;
        margin-bottom: 8px;
        
        .desc{
            font-size: 10px;
            text-align: left;
            font-weight: 400;
            display: -webkit-box;           /* Flexbox처럼 작동하도록 설정 */
            -webkit-line-clamp: 2;          /* 표시할 최대 줄 수 */
            -webkit-box-orient: vertical;   /* 수직 박스 방향 설정 */
            overflow: hidden;               /* 넘치는 텍스트를 숨김 */
            text-overflow: ellipsis;        /* 넘치는 부분을 "..."로 표시 */

        }
    }
 
    .lower-desc{
        width: inherit;
        display: flex;
        justify-content: space-between;
        
        .icons{
            text-align: left;
            font-size: 12px;

        }

        .price{
            font-size: 14px;
            font-weight: 600;
            text-align: right;
        }
    }
    
    
    
`;