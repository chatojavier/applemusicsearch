const getSiblings = (n) => [...n.parentElement.children].filter((c) => c != n);
export default getSiblings;
