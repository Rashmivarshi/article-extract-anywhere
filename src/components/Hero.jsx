import {file} from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <a href="/">
            <img src={file}
            alt="sumz_logo"
            className="w-32 object-contain bg-transparent cursor-pointer"
            />
            </a>
            {/* <button type="button"
            onClick={()=>window.open('https://github.com/rashmivarshi')}
            className="black_btn"
            >
                Github
            </button> */}
        </nav>
        <h1 className="head_text">Summarize any Article in a click <br 
        className="max-md:hidden"/><span className="orange_gradient">OpenAI GPT-4</span></h1>
        <h2 className="desc">This helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.</h2>
    </header>
  ) 
}

export default Hero