import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  dataSelector,
  fetchMoreData,
  getData,
} from "../store/reducers/data.reducer";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Carousal from "../components/Carousal/Carousal";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader/Loader";
import Sections from "../components/Sections/Sections";
import { ColorRing } from "react-loader-spinner";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/SideBar/SideBar";
import BlackScreen from "../components/BlackScreen/BlackScreen";
import { initializeStore } from "../store/store";

export async function getServerSideProps() {
  const store = initializeStore();
  await store.dispatch(getData());

  return {
    props: {
      initialReduxState: store.getState(),
    },
  };
}

const HomePage = () => {
  const { data, mixed_items, loader, moreData } = useSelector(dataSelector);
  const [loadMore, setLoadMore] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (loadMore) {
      setTimeout(() => {
        dispatch(fetchMoreData(mixed_items));
        setLoadMore(false);
      }, 20);
    }
  }, [dispatch, loadMore, mixed_items]);

  return (
    <div className="App">
      <Navbar setSideBar={setSideBar} />
      {sideBar && <BlackScreen setSideBar={setSideBar} />}
      <Sidebar setSideBar={setSideBar} sideBar={sideBar} />
      {loader ? (
        <div className="loader">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
            colors={["#EF4130", "#EF4130", "#EF4130", "#EF4130", "#EF4130"]}
          />
        </div>
      ) : (
        <div className="body">
          <Banner />
          {data.map(
            (item, index) =>
              item.content && (
                <div
                  key={index}
                  id={item.title === "Top 10 India" ? "top10" : "vipshows"}
                >
                  <h2>{item.title}</h2>
                  <Carousal data={item.content} />
                </div>
              )
          )}
          <InfiniteScroll
            dataLength={moreData.length}
            next={() => setLoadMore(true)}
            hasMore={mixed_items.length !== 0}
            loader={loadMore && <Loader />}
          >
            {moreData.map(
              (item, index) =>
                item.content && (
                  <div key={index}>
                    <h2 id={item.title}>{item.title}</h2>
                    <Sections data={item.content} />
                  </div>
                )
            )}
          </InfiniteScroll>
        </div>
      )}
      <Footer />
      <Error />
    </div>
  );
};

export default HomePage;
