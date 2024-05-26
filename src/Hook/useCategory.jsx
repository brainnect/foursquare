import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCategories = () => {    
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("data.json");
      return res?.data;
    },
  });

  return {categories, refetch}
};

export default useCategories;