const Button = ({ children = "Button", type = "" }) => {
    let classes = "";
    switch (type) {
        case "secondary":
            classes = "secondary";
            break;
    }
    return <button className={`button ${classes}`}>{children}</button>
}

export default Button;
