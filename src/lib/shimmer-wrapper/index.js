function PlaceholderWrapper({
  isLoading,
  isError,
  placeholder,
  children,
}) {
  return isError || isLoading ? placeholder : children
}

export default PlaceholderWrapper
