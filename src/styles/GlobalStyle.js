import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}	

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme.primaryColor};
		line-height: 1.8;
		overflow-x: hidden;
	}

	body::-webkit-scrollbar {
			width: 0.25rem;
	}

	body::-webkit-scrollbar-track {
		background: ${(props) => props.theme.background};
	}

	body::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.accentColor};
	}

	.MuiPaper-root {
		color: ${(props) => props.theme.primaryColor};
		background-color: ${(props) => props.theme.background};
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	li {
		list-style-type: none;
	}

  button:focus, textarea:focus, input:focus{
    outline: none;
  }

	.upload-progress-bar {
		color: #FFF;
	}

	textarea {
		resize: none;
		overflow: hidden;
	}

	button:disabled,
	button[disabled]{
		opacity: 0.5;
		cursor: not-allowed;
	}

	// using svg as input icon
	.svg-input > input, .avatar-input > input, .cover-photo > input {
		display: none;
	}

}
`;
