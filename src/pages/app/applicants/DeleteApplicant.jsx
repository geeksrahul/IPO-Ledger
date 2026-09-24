import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dbService } from '../../../supabase';
import { useDispatch } from 'react-redux';
import {removeApplicant} from "../../../feature/applicants/applicantsSlice.js"

function DeleteApplicant() {
    const {applicant_id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
       
    })
  return (
    <div>DeleteApplicant</div>
  )
}

export default DeleteApplicant