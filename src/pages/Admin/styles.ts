import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';

export const AdminContainer = styled.div`
    width: 100%;
    nav {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
        margin-bottom: 2rem;

        span {
            font-size: 3.2rem;
            font-weight: 700;
        }
    }
`;

export const AdminForm = styled.form`
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    label {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        
        width: 100%;
        
        margin-top: 2rem;
        

        font-weight: 700;
        font-size: 2rem;
        
        input, select, textarea {
            width: 95%;
            margin-top: 1rem;
            font-size: 1.6rem;
            font-weight: 700;
        }

        input, select {
            height: 4rem;
            border: none;
            border-radius: .5rem;
        }

    }

    label#label-anexo {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50%;
        height: 3rem;

        border-radius: .5rem;
        
        background: #fff;margin-bottom: 1rem;
        color: var(--color-primary);

        input[type=file] {
            display: none;
        }
    }

    input[type=submit] {
        width: 50%;
        height: 6rem;

        font-size: 2.6rem;
        color: var(--color-text);
        font-weight: 700;

        background-color: var(--color-golden);
        
        border: none;
        border-radius: .5rem;

        margin: 2rem 0;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        label#label-type, label#label-category, label#label-date {
            width: 30%;
        }

        label#label-anexo, input[type=submit]{
            width: 25%;
            
        }

        label#label-anexo {
            height: 3rem;
        }
        input[type=submit] {
            height: 6rem;
        }
    }
  
`;
