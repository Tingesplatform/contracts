# DAICO contracts
[![Solidity](https://img.shields.io/badge/solidity-0.5-blue.svg)](https://travis-ci.com/Tingesplatform/contracts)
[![Build Status](https://travis-ci.com/Tingesplatform/contracts.svg?branch=master)](https://travis-ci.com/Tingesplatform/contracts)
![GitHub last commit](https://img.shields.io/github/last-commit/TingesPlatform/contracts.svg)
![License](https://img.shields.io/github/license/TingesPlatform/contracts.svg)

DAICO is a mechanism of spending money gradually over time with the the opportunity to refund the capital contribution which means that investors may vote to withdraw the remaining funds if the project team fails. To achieve this, funds get locked in a structures consisting of two contract types:
* **Buckets** - keep the amount of funds (ERC-20 stablecoins) and allow to withdraw the limited amount via connected taps;
* **Taps** - serve withdrawal requests of spenders limiting the amount the spender can withdraw per time interval based on preconfigured rate;

# Authors
* [Kirill Varlamov](https://github.com/ongrid), OnGrid Systems ([github](https://github.com/OnGridSystems), [site](https://ongrid.pro))
* [Roman Nesytov](https://github.com/profx5), OnGrid Systems ([github](https://github.com/OnGridSystems), [site](https://ongrid.pro))