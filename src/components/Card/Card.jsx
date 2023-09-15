import PropTypes from 'prop-types';

const Card = ({card, handleSelectBtn}) => {
    console.log("Card", card);
    const {course_img,title,description,price,credit} = card;

   

    
    return (
        <div className="card bg-white shadow-lg shadow-gray-400 h-[450px]  rounded-lg p-2 text-center">
            <img className="w-full h-[150px] rounded mx-auto" src={course_img} alt="" />
            <h2 className="text-xl  font-bold text-black">{title}</h2>
            <p className="my-2 text-justify text-[#1C1B1B99]  text-[16px] p-2">{description}</p>
            <div className="flex gap-1 justify-evenly text-gray-500 mb-2 font-medium">
                <p><i className="fa-solid text-gray-800 fa-dollar-sign"></i> Price: {price}</p>
                <p><i className="fa-solid text-gray-800 fa-book-open"></i> Credit: {credit}</p>
            </div>
           <div className="card-actions justify-center mt-auto mb-2">
           <button onClick={() => handleSelectBtn(card)} className="btn w-full  text-white bg-[#2F80ED]">Select</button>

           </div>
            

             
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleSelectBtn: PropTypes.func
}

export default Card;