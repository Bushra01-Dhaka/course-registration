import PropTypes from 'prop-types';

const SelectCourse = ({selectBtn}) => {
    const {title} = selectBtn;
    
   
    return (
       
        <div>

                <li>{title}</li>
            
            
        </div>
    );
};

SelectCourse.propTypes = {
    selectBtn : PropTypes.object.isRequired
}

export default SelectCourse;