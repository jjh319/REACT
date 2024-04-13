const Title = (props) => {
    if (props.children === null) {
        return <h1>고양이 가라사대</h1>;
    }
    return <h1>{props.children}번째 고양이 가라사대</h1>;
};

export default Title;
