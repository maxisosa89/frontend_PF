import { useEffect, useState } from "react";
import { getPromos } from "../../../redux/actions/promos";
import { useDispatch, useSelector } from "react-redux";
import CreatePromo from "./CreatePromo";
import EditPromo from "./EditPromo";
import { Container, Children } from "../../../globalStyles";
import "./style.css";

const AdminPromos = () => {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    resume: "",
  });
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPromos()), [dispatch, product]);
  const allPromos = useSelector((store) => store.promoReducer.promos);
  return (
    <div>
      {product.title.length ? (
        <EditPromo
          title={product.title}
          img={product.img}
          resume={product.resume}
        />
      ) : (
        <CreatePromo />
      )}

      <Container className="edit">
        <Children
          className="create"
          onClick={() =>
            setProduct({
              title: "",
              img: "",
              resume: "",
            })
          }
        >
          <p></p>
          <h2>+</h2>
          <p>Crear nueva Promo</p>
        </Children>
        {allPromos.map((p) => (
          <Children
            className="miniature"
            onClick={() =>
              setProduct({
                title: p.title,
                img: p.img,
                resume: p.resume,
              })
            }
          >
            <div className="parts">
              <img src={p.img} alt={p.resume} />
            </div>
            <div className="parts">
              <h5>{p.title}</h5>
              <p>{p.resume}</p>
            </div>
          </Children>
        ))}
      </Container>
    </div>
  );
};

export default AdminPromos;
