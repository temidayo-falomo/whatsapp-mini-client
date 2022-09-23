import React from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { StyledInputBar } from "./InputBar.styled";
import { FaPaperclip } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";

function InputBar() {
  return (
    <StyledInputBar>
      <MdEmojiEmotions />
      <FaPaperclip />
      <input type="text" placeholder="Type A Message" />
      <BsFillMicFill />
    </StyledInputBar>
  );
}

export default InputBar;
