// const MainCard = (props) => {
//     return (
//         <div className="main-card">
//             <img src={props.img} alt="고양이" width="400" />
//             <button>🤍</button>
//         </div>
//     );
// };

// ES6+ 디스트럭처링 문법 적용 후
const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
    const heartIcon = alreadyFavorite ? '💖' : '🤍';
    return (
        <div className="main-card">
            <img src={img} alt="고양이" width="400" />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    );
};

export default MainCard;
