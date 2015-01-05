pigato-examples
===============

This repository contains an easy to use library of examples for [PIGATO](https://github.com/prdn/pigato), a microservices framework for Node.js based on ZeroMQ.

Examples:
* yahooFinance: download stock prices from Yahoo Finance
* quants: RCP and distributed querying to [quants.js](https://github.com/maxto/quants) (a Mathematical and Quantitative Library for Javascript and Node.js) 

#### Running the examples

1) Start the broker located in the root directory

2) Start the respective worker and client

**quants**

```
node broker
node quants/worker
node quants/client
```

If you have everything set up you should get an output similar to
```Monte Carlo VAR 0.02834779749288587```

#### Credits
[Fincluster](https://fincluster.com)
