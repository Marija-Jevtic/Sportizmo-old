const express = require('express');
const nunjucks = require('nunjucks');
const os = require('os');
const server = express();

server.use(express.static('./build', {
    cacheControl: false
}));

const getLocalIpAddress = function () {
    let address = false;

    const networkInterfaces = os.networkInterfaces();
    const fields = ['en0', 'en1'];

    if (networkInterfaces) {
        fields.forEach((field) => {
            //
            if (networkInterfaces[field]) {
                //
                networkInterfaces[field].forEach((host) => {
                    if (host.address) {
                        address = host.address;
                    }
                });
            }
        })
    }

    return address;
};

const fakeData = {
    results: [{
        marka: 'Adidas',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Adidas',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Adidas',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Nike',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Puma',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "45",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Nike',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "15,000",
        popust: false,
        brojevi: [33, 34, 44, 45]
    }]
};


nunjucks.configure('./views', {
    autoescape: true,
    express: server,
    watch: true
});

server.get('/search', function (req, res) {
    res.render('search.html', {
        pageType: 'search',
        results: fakeData.results,
        itemsRowSize: 3
    });
});

server.get('/home', function (req, res) {
    res.render('home.html', {
        pageType: 'home',
        results: fakeData.results,
        itemsRowSize: 4
    });
});

server.get('/', function (req, res) {
    res.render('home.html', {
        pageType: 'home',
        results: fakeData.results,
        itemsRowSize: 4
    });
});

server.get('/detail', function (req, res) {
    res.render('detail.html', {
        pageType: 'detail',
        results: fakeData.results,
        itemsRowSize: 2
    });
});

server.get('/sale', function (req, res) {
    res.render('sale.html', {
        pageType: 'sale',
        results: fakeData.results
    });
});

server.get('/buy', function (req, res) {
    res.render('buy.html', {
        pageType: 'buy'
    });
});

server.get('/blog-article', function (req, res) {
    res.render('blog.html', {
        pageType: 'blog-article',
        results: fakeData.results
    });
});

server.get('/blog-post', function (req, res) {
    res.render('blog.html', {
        pageType: 'blog-post',
        results: fakeData.results
    });
});

server.get('/how-to-buy', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'how-to-buy'
    });
});


server.get('/questions', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'questions'
    });
});

server.get('/delivery', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'delivery'
    });
});

server.get('/refund', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'refund'
    });
});


server.get('/replace', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'replace'
    });
});

server.get('/reclamation', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'reclamation'
    });
});

server.get('/policy', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'policy'
    });
});

server.get('/about-us', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'about-us'
    });
});

server.get('/contact', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'contact'
    });
});

server.get('/how-to-measure', function (req, res) {
    res.render('how-to-buy.html', {
        pageType: 'how-to-measure',
    });
});

server.get('/favourite', function (req, res) {
    res.render('favourite.html', {
        pageType: 'favourite',
        results: fakeData.results,
        itemsRowSize: 4
    });
});

server.listen(9192, function () {
    console.log('Express server running on http://localhost:9192');
    console.log(`Express local IP http://${getLocalIpAddress()}:9192`);
});
