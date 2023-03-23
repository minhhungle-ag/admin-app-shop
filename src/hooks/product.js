import { useMutation, useQuery, useQueryClient } from "react-query";
import { productApi } from "../api/productApi";

export function useProducts(filterParams) {
  const queryKey = ["/product"];
  const { data, isLoading, error } = useQuery(queryKey, () =>
    productApi.getAll(filterParams)
  );

  const queryClient = useQueryClient();

  const addMutation = useMutation((data) => productApi.add(data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
  const editMutation = useMutation((id, data) => productApi.edit(id, data), {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });

  return {
    productList: data?.data,
    pagination: data?.pagination,
    isLoading,
    error,

    addMutation,
    editMutation,
  };
}
