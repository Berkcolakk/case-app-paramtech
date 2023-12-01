import { Input, InputProps } from 'antd';
import React from "react"
const CustomInput: React.FC<InputProps> = (props) => {
    return (
        <Input {...props} />
    )
}
export default CustomInput;