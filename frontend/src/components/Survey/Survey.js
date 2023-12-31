
import { useForm } from "react-hook-form";
import {useState} from 'react';
import './survey.css';
import {useNavigate} from 'react-router-dom';
import {API} from '../../api';

const Survey = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [surveyData, setSurveyData] = useState();
    const navigate = useNavigate();

    const onSubmit = async data => {
        setSurveyData(data);
        const userID = sessionStorage.getItem("user_id");
        const response = await API.submitForm(userID, data.employerName, data.getInterview, data.getOffer, data.foundEmployer.join(", "));
        navigate('/profile');
    }   
    
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className="survey" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Employer Name
        <input {...register("employerName", {required: true})} />
        </label>
        <br/>
        <label>
        How did you find the employer?
        {['Instagram', 'LinkedIn', 'Facebook'].map((item) => {
            return (
            <label key={item}>
                {item}
            <input name="platform" value={item} type="checkbox" {...register("foundEmployer")}/>
            </label>
        );
        })}
        </label>
        <br/>
        <label>Did you have an interview?
            <select {...register("getInterview", {required: true})}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
        </label>
        <br/>
        <label>Did you recieve an offer?
            <select {...register("getOffer", {required: true})}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
        </label>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>All fields required</span>}
        <br/>
        <input type="submit" />
      </form>
    )
}

export default Survey;