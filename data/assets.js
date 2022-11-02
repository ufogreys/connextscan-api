module.exports = {
  mainnet: [
    /*{
      id: 'usdt',
      symbol: 'USDT',
      name: 'Tether',
      image: '/logos/assets/usdt.png',
      coingecko_id: 'tether',
      is_stablecoin: true,
      contracts: [
        {
          contract_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          chain_id: 1,
          decimals: 6,
        },
        {
          contract_address: '0x55d398326f99059ff775485246999027b3197955',
          chain_id: 56,
          decimals: 18,
        },
        {
          contract_address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          chain_id: 137,
          decimals: 6,
        },
        {
          contract_address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          chain_id: 42161,
          decimals: 6,
        },
        {
          contract_address: '0x52484E1ab2e2B22420a25c20FA49E173a26202Cd',
          chain_id: 42170,
          decimals: 6,
        },
        {
          contract_address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
          chain_id: 10,
          decimals: 6,
        },
        {
          contract_address: '0xc7198437980c041c805a1edcba50c1ce5db95118',
          chain_id: 43114,
          decimals: 6,
          symbol: 'USDT.e',
        },
        {
          contract_address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
          chain_id: 250,
          decimals: 6,
          symbol: 'fUSDT',
        },
        {
          contract_address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
          chain_id: 100,
          decimals: 6,
        },
        {
          contract_address: '0x8e70cd5b4ff3f62659049e74b6649c6603a0e594',
          chain_id: 1284,
          decimals: 6,
          symbol: 'madUSDT',
        },
        {
          contract_address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
          chain_id: 1285,
          decimals: 6,
          symbol: 'USDT',
        },
        {
          contract_address: '0xfadbbf8ce7d5b7041be672561bba99f79c532e10',
          chain_id: 122,
          decimals: 6,
        },
        {
          contract_address: '0xab58da63dfdd6b97eaab3c94165ef6f43d951fb2',
          chain_id: 2001,
          decimals: 6,
          symbol: 'madUSDT',
        },
        {
          contract_address: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
          chain_id: 288,
          decimals: 6,
        },
        {
          contract_address: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
          chain_id: 1666600000,
          decimals: 6,
        },
        {
          contract_address: '0x66e428c3f67a68878562e79a0234c1f83c208770',
          chain_id: 25,
          decimals: 6,
        },
        {
          contract_address: '0x7ff4a56b32ee13d7d4d405887e0ea37d61ed919e',
          chain_id: 9001,
          decimals: 6,
        },
      ],
    },*/
    {
      id: 'usdc',
      symbol: 'USDC',
      name: 'USD Coin',
      image: '/logos/assets/usdc.png',
      coingecko_id: 'usd-coin',
      is_stablecoin: true,
      contracts: [
        {
          contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          chain_id: 1,
          decimals: 6,
        },
        /*{
          contract_address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
          chain_id: 56,
          decimals: 18,
        },*/
        {
          contract_address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
          chain_id: 137,
          decimals: 6,
          next_asset: {
            contract_address: '0x2ABe2d4F09ea3124DE56AD91ae0950A3B71eCD11',
            decimals: 6,
            symbol: 'nextUSDC',
          },
        },
        {
          contract_address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
          chain_id: 10,
          decimals: 6,
          next_asset: {
            contract_address: '0x85FB8e2903Ad92A2ab0C6a725806636666ee2Ab4',
            decimals: 6,
            symbol: 'nextUSDC',
          },
        },
        /*{
          contract_address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
          chain_id: 42161,
          decimals: 6,
        },
        {
          contract_address: '0x750ba8b76187092B0D1E87E28daaf484d1b5273b',
          chain_id: 42170,
          decimals: 6,
        },
        {
          contract_address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
          chain_id: 43114,
          decimals: 6,
          symbol: 'USDC.e',
        },
        {
          contract_address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
          chain_id: 250,
          decimals: 6,
        },
        {
          contract_address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
          chain_id: 100,
          decimals: 6,
        },
        {
          contract_address: '0x8f552a71efe5eefc207bf75485b356a0b3f01ec9',
          chain_id: 1284,
          decimals: 6,
          symbol: 'madUSDC',
        },
        {
          contract_address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
          chain_id: 1285,
          decimals: 6,
          symbol: 'USDC',
        },
        {
          contract_address: '0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5',
          chain_id: 122,
          decimals: 6,
        },
        {
          contract_address: '0x5a955fddf055f2de3281d99718f5f1531744b102',
          chain_id: 2001,
          decimals: 6,
          symbol: 'madUSDC',
        },
        {
          contract_address: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
          chain_id: 288,
          decimals: 6,
        },
        {
          contract_address: '0x985458e523db3d53125813ed68c274899e9dfab4',
          chain_id: 1666600000,
          decimals: 6,
        },
        {
          contract_address: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
          chain_id: 25,
          decimals: 6,
        },
        {
          contract_address: '0x51e44ffad5c2b122c8b635671fcc8139dc636e82',
          chain_id: 9001,
          decimals: 6,
        },*/
      ],
    },
    /*{
      id: 'dai',
      symbol: 'DAI',
      name: 'Dai',
      image: '/logos/assets/dai.png',
      coingecko_id: 'dai',
      is_stablecoin: true,
      contracts: [
        {
          contract_address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
          chain_id: 56,
          decimals: 18,
        },
        {
          contract_address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
          chain_id: 137,
          decimals: 18,
        },
        {
          contract_address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          chain_id: 42161,
          decimals: 18,
        },
        {
          contract_address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          chain_id: 42170,
          decimals: 18,
        },
        {
          contract_address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          chain_id: 10,
          decimals: 18,
        },
        {
          contract_address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
          chain_id: 43114,
          decimals: 18,
          symbol: 'DAI.e',
        },
        {
          contract_address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
          chain_id: 250,
          decimals: 18,
        },
        {
          contract_address: '0x0000000000000000000000000000000000000000',
          chain_id: 100,
          decimals: 18,
          symbol: 'xDAI',
          image: '/logos/assets/xdai.png',
        },
        {
          contract_address: '0xc234a67a4f840e61ade794be47de455361b52413',
          chain_id: 1284,
          decimals: 18,
          symbol: 'madDAI',
        },
        {
          contract_address: '0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844',
          chain_id: 1285,
          decimals: 18,
          symbol: 'DAI',
        },
        {
          contract_address: '0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba',
          chain_id: 122,
          decimals: 18,
        },
        {
          contract_address: '0x41eafc40cd5cb904157a10158f73ff2824dc1339',
          chain_id: 2001,
          decimals: 18,
          symbol: 'madDAI',
        },
        {
          contract_address: '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
          chain_id: 288,
          decimals: 18,
        },
        {
          contract_address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          chain_id: 1666600000,
          decimals: 18,
        },
        {
          contract_address: '0xf2001b145b43032aaf5ee2884e456ccd805f677d',
          chain_id: 25,
          decimals: 18,
        },
        {
          contract_address: '0x63743acf2c7cfee65a5e356a4c4a005b586fc7aa',
          chain_id: 9001,
          decimals: 18,
        },
      ],
    },*/
    {
      id: 'eth',
      symbol: 'ETH',
      name: 'Ethereum',
      image: '/logos/assets/eth.png',
      coingecko_id: 'ethereum',
      contracts: [
        {
          contract_address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          chain_id: 1,
          decimals: 18,
          symbol: 'WETH',
        },
        /*{
          contract_address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
          chain_id: 56,
          decimals: 18,
        },*/
        {
          contract_address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
          chain_id: 137,
          decimals: 18,
          symbol: 'WETH',
          next_asset: {
            contract_address: '0x2BD5B3cfB2b16F2B10e7BA41dc1cb93d61B36bB8',
            decimals: 6,
            symbol: 'nextWETH',
          },
        },
        {
          contract_address: '0x4200000000000000000000000000000000000006',
          chain_id: 10,
          decimals: 18,
          symbol: 'WETH',
          next_asset: {
            contract_address: '0xfD5C16a50b717338Cbcb44e34e10d735709E9Cb9',
            decimals: 6,
            symbol: 'nextWETH',
          },
        },
        /*{
          contract_address: '0x0000000000000000000000000000000000000000',
          chain_id: 42161,
          decimals: 18,
        },
        {
          contract_address: '0x0000000000000000000000000000000000000000',
          chain_id: 42170,
          decimals: 18,
        },
        {
          contract_address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
          chain_id: 43114,
          decimals: 18,
          symbol: 'WETH.e',
        },
        {
          contract_address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
          chain_id: 250,
          decimals: 18,
        },
        {
          contract_address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
          chain_id: 100,
          decimals: 18,
          symbol: 'WETH',
        },
        {
          contract_address: '0x30d2a9f5fdf90ace8c17952cbb4ee48a55d916a7',
          chain_id: 1284,
          decimals: 18,
          symbol: 'madWETH',
        },
        {
          contract_address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
          chain_id: 1285,
          decimals: 18,
          symbol: 'WETH',
        },
        {
          contract_address: '0xa722c13135930332eb3d749b2f0906559d2c5b99',
          chain_id: 122,
          decimals: 18,
          symbol: 'WETH',
        },
        {
          contract_address: '0x5950f9b6ef36f3127ea66799e64d0ea1f5fdb9d1',
          chain_id: 2001,
          decimals: 18,
          symbol: 'madWETH',
        },
        {
          contract_address: '0x0000000000000000000000000000000000000000',
          chain_id: 288,
          decimals: 18,
        },
        {
          contract_address: '0xe44fd7fcb2b1581822d0c862b68222998a0c299a',
          chain_id: 25,
          decimals: 18,
          symbol: 'WETH',
        },
        {
          contract_address: '0x5842c5532b61acf3227679a8b1bd0242a41752f2',
          chain_id: 9001,
          decimals: 18,
          symbol: 'WETH',
        },*/
      ],
    },
    /*{
      id: 'wbtc',
      symbol: 'WBTC',
      name: 'Wrapped Bitcoin',
      image: '/logos/assets/wbtc.png',
      coingecko_id: 'wrapped-bitcoin',
      contracts: [
        {
          contract_address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          chain_id: 1,
          decimals: 8,
        },
        {
          contract_address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
          chain_id: 56,
          decimals: 18,
          symbol: 'BTCB',
          image: '/logos/assets/btc.png',
        },
        {
          contract_address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
          chain_id: 137,
          decimals: 8,
        },
        {
          contract_address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
          chain_id: 42161,
          decimals: 8,
        },
        {
          contract_address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
          chain_id: 10,
          decimals: 8,
        },
        {
          contract_address: '0x50b7545627a5162f82a992c33b87adc75187b218',
          chain_id: 43114,
          decimals: 8,
          symbol: 'WBTC.e',
        },
        {
          contract_address: '0x321162cd933e2be498cd2267a90534a804051b11',
          chain_id: 250,
          decimals: 8,
          symbol: 'BTC',
        },
        {
          contract_address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
          chain_id: 100,
          decimals: 8,
        },
        {
          contract_address: '0x1dc78acda13a8bc4408b207c9e48cdbc096d95e0',
          chain_id: 1284,
          decimals: 8,
          symbol: 'madWBTC',
        },
        {
          contract_address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
          chain_id: 1285,
          decimals: 8,
          symbol: 'WBTC',
        },
        {
          contract_address: '0x33284f95ccb7b948d9d352e1439561cf83d8d00d',
          chain_id: 122,
          decimals: 8,
        },
        {
          contract_address: '0x48aeb7584ba26d3791f06fba360db435b3d7a174',
          chain_id: 2001,
          decimals: 8,
          symbol: 'madWBTC',
        },
        {
          contract_address: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b',
          chain_id: 288,
          decimals: 8,
        },
        {
          contract_address: '0x062e66477faf219f25d27dced647bf57c3107d52',
          chain_id: 25,
          decimals: 8,
        },
        {
          contract_address: '0xf80699dc594e00ae7ba200c7533a07c1604a106d',
          chain_id: 9001,
          decimals: 8,
        },
      ],
    },
    {
      id: 'grt',
      symbol: 'GRT',
      name: 'The Graph',
      image: '/logos/assets/grt.png',
      coingecko_id: 'the-graph',
      contracts: [
        {
          contract_address: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0x5fe2b58c013d7601147dcdd68c143a77499f5531',
          chain_id: 137,
          decimals: 18,
        },
        {
          contract_address: '0x23a941036ae778ac51ab04cea08ed6e2fe103614',
          chain_id: 42161,
          decimals: 18,
        },
        {
          contract_address: '0x8a0cac13c7da965a312f08ea4229c37869e85cb9',
          chain_id: 43114,
          decimals: 18,
          symbol: 'GRT.e',
        },
        {
          contract_address: '0xfadc59d012ba3c110b08a15b7755a5cb7cbe77d7',
          chain_id: 100,
          decimals: 18,
        },
        {
          contract_address: '0x025a4c577198d116ea499193e6d735fdb2e6e841',
          chain_id: 122,
          decimals: 18,
        },
      ],
    },
    {
      id: 'gno',
      symbol: 'GNO',
      name: 'Gnosis',
      image: '/logos/assets/gno.png',
      coingecko_id: 'gnosis',
      contracts: [
        {
          contract_address: '0x6810e776880c02933d47db1b9fc05908e5386b96',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0x5ffd62d3c3ee2e81c00a7b9079fb248e7df024a8',
          chain_id: 137,
          decimals: 18,
        },
        {
          contract_address: '0xa0b862f60edef4452f25b4160f177db44deb6cf1',
          chain_id: 42161,
          decimals: 18,
        },
        {
          contract_address: '0x9c58bacc331c9aa871afd802db6379a98e80cedb',
          chain_id: 100,
          decimals: 18,
        },
      ],
    },
    {
      id: 'fei',
      symbol: 'FEI',
      name: 'Fei USD',
      image: '/logos/assets/fei.png',
      coingecko_id: 'fei-usd',
      is_stablecoin: true,
      contracts: [
        {
          contract_address: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0xc7031408c7978da9aca03308cd104cb54e7a2eb3',
          chain_id: 137,
          decimals: 18,
        },
        {
          contract_address: '0x4a717522566c7a09fd2774ccedc5a8c43c5f9fd2',
          chain_id: 42161,
          decimals: 18,
        },
        {
          contract_address: '0x35d48a789904e9b15705977192e5d95e2af7f1d3',
          chain_id: 10,
          decimals: 18,
        },
        {
          contract_address: '0xc382dc8501e526975579147ba6017376dedb78be',
          chain_id: 43114,
          decimals: 18,
        },
      ],
    },
    {
      id: 'gth',
      symbol: 'GTH',
      name: 'Gather',
      image: '/logos/assets/gth.png',
      coingecko_id: 'gather',
      contracts: [
        {
          contract_address: '0xeb986da994e4a118d5956b02d8b7c3c7ce373674',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0xeb986da994e4a118d5956b02d8b7c3c7ce373674',
          chain_id: 56,
          decimals: 18,
        },
        {
          contract_address: '0x0000000000000000000000000000000000000000',
          chain_id: 192837465,
          decimals: 18,
        },
      ],
    },
    {
      id: 'boba',
      symbol: 'BOBA',
      name: 'Boba',
      image: '/logos/assets/boba.png',
      coingecko_id: 'boba-network',
      contracts: [
        {
          contract_address: '0x42bbfa2e77757c645eeaad1655e0911a7553efbc',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7',
          chain_id: 288,
          decimals: 18,
        },
      ],
    },
    {
      id: 'magic',
      symbol: 'MAGIC',
      name: 'MAGIC',
      image: '/logos/assets/magic.png',
      coingecko_id: 'magic',
      contracts: [
        {
          contract_address: '0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a',
          chain_id: 1,
          decimals: 18,
        },
        {
          contract_address: '0x539bde0d7dbd336b79148aa742883198bbf60342',
          chain_id: 42161,
          decimals: 18,
        },
      ],
    },
    {
      id: 'miva',
      symbol: 'MIVA',
      name: 'Minerva Wallet',
      image: '/logos/assets/miva.png',
      coingecko_id: 'minerva-wallet',
      contracts: [
        {
          contract_address: '0xc0b2983a17573660053beeed6fdb1053107cf387',
          chain_id: 137,
          decimals: 18,
        },
        {
          contract_address: '0x63e62989d9eb2d37dfdb1f93a22f063635b07d51',
          chain_id: 100,
          decimals: 18,
        },
      ],
    },
    {
      id: 'fraction',
      symbol: 'FRACTION',
      name: 'Fraction',
      image: '/logos/assets/fraction.png',
      coingecko_id: 'fraction',
      contracts: [
        {
          contract_address: '0xbd80cfa9d93a87d1bb895f810ea348e496611cd4',
          chain_id: 56,
          decimals: 18,
        },
        {
          contract_address: '0xbd80cfa9d93a87d1bb895f810ea348e496611cd4',
          chain_id: 137,
          decimals: 18,
        },
        {
          contract_address: '0x2bf2ba13735160624a0feae98f6ac8f70885ea61',
          chain_id: 42161,
          decimals: 18,
        },
        {
          contract_address: '0xbd80cfa9d93a87d1bb895f810ea348e496611cd4',
          chain_id: 10,
          decimals: 18,
        },
        {
          contract_address: '0xbd80cfa9d93a87d1bb895f810ea348e496611cd4',
          chain_id: 43114,
          decimals: 18,
        },
        {
          contract_address: '0x2bf2ba13735160624a0feae98f6ac8f70885ea61',
          chain_id: 100,
          decimals: 18,
        },
      ],
    },*/
  ],
  testnet: [
    {
      id: 'test',
      symbol: 'TEST',
      name: 'Test',
      is_stablecoin: true,
      contracts: [
        {
          contract_address: '0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1',
          chain_id: 5,
          decimals: 18,
          symbol: 'TEST',
        },
        {
          contract_address: '0xeDb95D8037f769B72AAab41deeC92903A98C9E16',
          chain_id: 80001,
          decimals: 18,
          symbol: 'TEST',
        },
        {
          contract_address: '0x68Db1c8d85C09d546097C65ec7DCBFF4D6497CbF',
          chain_id: 420,
          decimals: 18,
          symbol: 'TEST',
        },
        {
          contract_address: '0xDC805eAaaBd6F68904cA706C221c72F8a8a68F9f',
          chain_id: 421613,
          decimals: 18,
          symbol: 'TEST',
        },
      ],
    },
    {
      id: 'eth',
      symbol: 'ETH',
      name: 'Ethereum',
      image: '/logos/assets/eth.png',
      coingecko_id: 'ethereum',
      contracts: [
        {
          contract_address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
          chain_id: 5,
          decimals: 18,
          symbol: 'WETH',
        },
        {
          contract_address: '0x1E5341E4b7ed5D0680d9066aac0396F0b1bD1E69',
          chain_id: 80001,
          decimals: 18,
          symbol: 'nextWETH',
          is_pool: true,
        },
        {
          contract_address: '0x39B061B7e41DE8B721f9aEcEB6b3f17ECB7ba63E',
          chain_id: 420,
          decimals: 18,
          symbol: 'nextWETH',
          is_pool: true,
        },
        {
          contract_address: '0x1346786E6A5e07b90184a1Ba58E55444b99DC4A2',
          chain_id: 421613,
          decimals: 18,
          symbol: 'WETH',
        },
      ],
    },
  ],
};