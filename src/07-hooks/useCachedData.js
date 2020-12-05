export const useCachedData = () => {
	const users = useMemo(() => axios.get("https://5fca4c573c1c220016442227.mockapi.io/api/v1/users"));
}
