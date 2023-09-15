import PropTypes from 'prop-types';

const SelectCourse = ({selectBtn}) => {
    const {title} = selectBtn;
    return (
        <div>

            <ol>
                <li>{title}</li>
            </ol>
            
        </div>
    );
};

SelectCourse.propTypes = {
    selectBtn : PropTypes.object.isRequired
}

export default SelectCourse;