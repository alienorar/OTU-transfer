import axios from 'axios';

// This function accepts a degree type and fetches accordingly
export async function getEduDirections(degree: 'BACHELOR' | 'MASTER') {
  const response = await axios.get('https://back.asianuniversity.uz/api/education/directions', {
    params: {
      eduDegree: degree,
      language: 'uz',
    },
  });
  return response.data;
}
