import styled from "styled-components"

const LogoContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

    display: flex;
    align-items: center;
    column-gap: 3px;
    cursor: pointer;
    h2 {
        font-family: "Plus Jakarta Sans", sans-serif;
        color: var(--primaryColor);
        margin: 0;
        font-weight: 700;
    }
`

export default function Navlogo({font_size,logo_size = 55}) {
    return (
        <LogoContainer>
            <svg width={logo_size} height={logo_size} viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z" fill="#7E22CE" />
                <path opacity="0.4" d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z" fill="#7E22CE" />
            </svg>
            <h2 style={{fontSize: font_size}}>LAMA.</h2>
        </LogoContainer>
    )
};
