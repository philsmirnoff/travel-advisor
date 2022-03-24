import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

var options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '7bed659c00msh43a443c538d73f0p1d7345jsn230e38afb912'
  }
};


export const getPlacesData = async() => {
  try {
    const { data: { data }} = await axios.get('URL, options);');
  return data;
  } catch (error) {
    console.log(error);
  }
}


