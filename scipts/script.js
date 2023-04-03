const ecomEventEmit = (e,n,t,m,i)=>{
    gtag("event", e, {
        currency: "BDT",
        value: i,
        content_type: n,
        items: [{
            item_id: "rok_" + t,
            item_category: m
        }]
    })
}
;
