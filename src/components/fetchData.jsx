import React from 'react'
import Supabase from './Supabase';

const fetchData = async() => {
    try {
        const { data, error } = await Supabase
          .from('earning_call_summary') // Replace 'your_table_name' with your table name
          .select(); // Select all columns, or specify the columns you need
    
        if (error) throw error;
        
        return data; // Data will be an array of records
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
}

export default fetchData;