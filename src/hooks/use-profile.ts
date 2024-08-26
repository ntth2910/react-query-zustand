import { UserProfile, userApi } from '@/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type UserProfileQueryOption = Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>

export const useProfile = (options?: UserProfileQueryOption) => {
  return useQuery({
    ...options,
    queryKey: ['profile'],
    queryFn: userApi.getProfile,
  })
}
