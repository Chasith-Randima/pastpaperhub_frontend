import fetch from "isomorphic-fetch";
import axios from "axios";

let API = process.env.NEXT_PUBLIC_API_DEVELOPMENT;

if (process.env.NEXT_PUBLIC_PRODUCTION == true) {
  API = process.env.NEXT_PUBLIC_API_PRODUCTION;
}

export const createPaper = async (data, token) => {
  console.log(data, "inside action");
  let url = `${API}/papers/`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const allPapers = (paramsData) => {
  let url = `${API}/papers`;

  return axios(url, {
    method: "GET",
    // params: { ...query },
    params: {
      // examType: paramsData.examType,
      // subject: paramsData.subject,
      page: paramsData.page,
      limit: paramsData.limit,
      //   name: paramsData.name,
      //   city: paramsData.city,
      //   brandname: paramsData.brandname,
      //   Device: paramsData.Device,
      //   "price[gte]": paramsData.priceMin,
      //   "price[lte]": paramsData.priceMax,
      //   sort: paramsData.sort,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const papersById = (paramsData) => {
  let url = `${API}/papers/papersById`;

  return axios(url, {
    method: "GET",
    // params: { ...query },
    params: {
      examType: paramsData.examType,
      subject: paramsData.subject,
      // page: paramsData.page,
      // limit: paramsData.limit,
      //   name: paramsData.name,
      //   city: paramsData.city,
      //   brandname: paramsData.brandname,
      //   Device: paramsData.Device,
      //   "price[gte]": paramsData.priceMin,
      //   "price[lte]": paramsData.priceMax,
      //   sort: paramsData.sort,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const onePaperByParams = (paramsData) => {
  let url = `${API}/papers`;

  return axios(url, {
    method: "GET",
    // params: { ...query },
    params: {
      medium: paramsData.medium,
      subject: paramsData.subject,
      year: paramsData.year,
      // page: paramsData.page,
      // limit: paramsData.limit,
      //   name: paramsData.name,
      //   city: paramsData.city,
      //   brandname: paramsData.brandname,
      //   Device: paramsData.Device,
      //   "price[gte]": paramsData.priceMin,
      //   "price[lte]": paramsData.priceMax,
      //   sort: paramsData.sort,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const onePaper = (id) => {
  let url = `${API}/papers/${id}`;

  return axios(url, {
    method: "GET",
    // params: {
    //   examType: paramsData.examType,
    //   subject: paramsData.subject,
    //   // page: paramsData.page,
    //   // limit: paramsData.limit,
    //   //   name: paramsData.name,
    //   //   city: paramsData.city,
    //   //   brandname: paramsData.brandname,
    //   //   Device: paramsData.Device,
    //   //   "price[gte]": paramsData.priceMin,
    //   //   "price[lte]": paramsData.priceMax,
    //   //   sort: paramsData.sort,
    // },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const updatePaper = async (id, data, token) => {
  console.log(id, data, token);
  let url = `${API}/papers/${id}`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deletePaper = async (id, token) => {
  let url = `${API}/papers/${id}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
