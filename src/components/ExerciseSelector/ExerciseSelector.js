import React from 'react';

const ExerciseSelector = () => {
    return (
        <div className="form center">
            <p className="f3 pa3">{'GCS - Select the Exercise and Answer: '}</p>
            <select className="f4 pa2 w-90 center">
                <option>Exercise 1</option>
                <option>Exercise 2</option>
                <option>Exercise 3</option>
            </select>
        </div>
    );
}

export default ExerciseSelector;