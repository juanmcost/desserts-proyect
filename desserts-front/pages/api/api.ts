import useSWR, { SWRResponse } from "swr"
import { Dessert } from "../../Types/Desserts"

type request = [
    input: any,
    init?: any
]

const fetcher = (...args: request) => fetch(...args).then(res => res.json())

export function useUser (id:string) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    error,
  }
}

export function useDesserts () {
  const { data, error } = useSWR(`/api/desserts`, fetcher)

  return {
    desserts: data as Dessert[],
    isLoading: !error && !data,
    error,
  }
}