import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const { id } = useParams();

    console.log("id ->", id);

    return (
        "PRODUCT DETAIL PAGE"
    );
}

export default ProductDetail;