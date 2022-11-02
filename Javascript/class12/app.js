var libarary = [
    {
        author: "Bill Gates",
        title: "The Road Ahear",
        radingStatus: true,
    },
    {
        author: "Stevan Jobs",
        title: "Wiltwr Isaacson",
        radingStatus: true,
    },
    {
        author: "Suzan Colline",
        title: "The Road Ahear",
        radingStatus: false
    }

]

for (let i = 0; i < libarary.length; i++) {
    if (libarary[i].radingStatus === true) {
        console.log(libarary[i].author)
    }

}
