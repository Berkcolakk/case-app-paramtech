import { Button, ButtonProps } from "antd"
import React from "react"
const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button size="middle" type="primary" {...props} />
    )
}
export default CustomButton;