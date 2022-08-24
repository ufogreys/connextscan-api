module.exports = {
  mainnet: {
    evm: [
      {
        id: 'ethereum',
        chain_id: 1,
        domain_id: '6648936',
        name: 'Ethereum',
        short_name: 'ETH',
        provider_params: [
          {
            chainId: '0x1',
            chainName: 'Ethereum',
            rpcUrls: [
              'https://rpc.ankr.com/eth',
              'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://etherscan.io'],
          },
        ],
        explorer: {
          name: 'Etherscan',
          url: 'https://etherscan.io',
          icon: '/logos/explorers/etherscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/ethereum.png',
        color: '#c0c2c3',
        website: 'https://ethereum.org',
        coingecko_id: 'ethereum',
      },
      {
        id: 'binance',
        chain_id: 56,
        name: 'BNB Chain',
        short_name: 'BNB',
        provider_params: [
          {
            chainId: '0x38',
            chainName: 'BNB Chain',
            rpcUrls: [
              'https://rpc.ankr.com/bsc',
              'https://bsc-dataseed.binance.org',
            ],
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            blockExplorerUrls: ['https://bscscan.com'],
          },
        ],
        explorer: {
          name: 'BscScan',
          url: 'https://bscscan.com',
          icon: '/logos/explorers/bscscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/binance.png',
        color: '#e8b30b',
        website: 'https://bnbchain.world',
        coingecko_id: 'binancecoin',
      },
      {
        id: 'polygon',
        chain_id: 137,
        name: 'Polygon',
        short_name: 'MATIC',
        provider_params: [
          {
            chainId: '0x89',
            chainName: 'Polygon',
            rpcUrls: [
              'https://rpc.ankr.com/polygon',
            ],
            nativeCurrency: {
              name: 'Polygon',
              symbol: 'MATIC',
              decimals: 18,
            },
            blockExplorerUrls: ['https://polygonscan.com'],
          },
        ],
        explorer: {
          name: 'Polygonscan',
          url: 'https://polygonscan.com',
          icon: '/logos/explorers/polygonscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/polygon.png',
        color: '#8247e5',
        website: 'https://polygon.technology',
        coingecko_id: 'matic-network',
      },
      {
        id: 'avalanche',
        chain_id: 43114,
        domain_id: '1635148152',
        name: 'Avalanche',
        short_name: 'AVAX',
        provider_params: [
          {
            chainId: '0xa86a',
            chainName: 'Avalanche',
            rpcUrls: [
              'https://rpc.ankr.com/avalanche',
              'https://api.avax.network/ext/bc/C/rpc',
            ],
            nativeCurrency: {
              name: 'Avalanche',
              symbol: 'AVAX',
              decimals: 18,
            },
            blockExplorerUrls: ['https://snowtrace.io'],
          },
        ],
        explorer: {
          name: 'Snowtrace',
          url: 'https://snowtrace.io',
          icon: '/logos/explorers/snowtrace.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/avalanche.png',
        color: '#e84143',
        website: 'https://avax.network',
        coingecko_id: 'avalanche-2',
      },
      {
        id: 'optimism',
        chain_id: 10,
        name: 'Optimism',
        short_name: 'OPT',
        provider_params: [
          {
            chainId: '0xa',
            chainName: 'Optimism',
            rpcUrls: [
              'https://rpc.ankr.com/optimism',
              'https://mainnet.optimism.io',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'oETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://optimistic.etherscan.io'],
          },
        ],
        explorer: {
          name: 'Etherscan',
          url: 'https://optimistic.etherscan.io',
          icon: '/logos/explorers/optimism.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/optimism.png',
        color: '#dc2626',
        website: 'https://optimism.io',
        coingecko_id: 'optimism',
      },
      {
        id: 'arbitrum',
        chain_id: 42161,
        name: 'Arbitrum One',
        short_name: 'ARB',
        provider_params: [
          {
            chainId: '0xa4b1',
            chainName: 'Arbitrum One',
            rpcUrls: [
              'https://rpc.ankr.com/arbitrum',
              'https://arb1.arbitrum.io/rpc',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'aETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://arbiscan.io'],
          },
        ],
        explorer: {
          name: 'Arbiscan',
          url: 'https://arbiscan.io',
          icon: '/logos/explorers/arbiscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/arbitrum.png',
        color: '#28a0f0',
        website: 'https://arbitrum.io',
        coingecko_id: 'arbitrum',
      },
      {
        id: 'arbitrum_nova',
        chain_id: 42170,
        name: 'Arbitrum Nova',
        short_name: 'NOVA',
        provider_params: [
          {
            chainId: '0xa4ba',
            chainName: 'Arbitrum Nova',
            rpcUrls: [
              'https://nova.arbitrum.io/rpc',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'aETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://nova-explorer.arbitrum.io'],
          },
        ],
        explorer: {
          name: 'Arbitrum',
          url: 'https://nova-explorer.arbitrum.io',
          icon: '/logos/explorers/arbiscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/nova.png',
        color: '#28a0f0',
        website: 'https://arbitrum.io',
        coingecko_id: 'arbitrum',
      },
      {
        id: 'fantom',
        chain_id: 250,
        name: 'Fantom',
        short_name: 'FTM',
        provider_params: [
          {
            chainId: '0xfa',
            chainName: 'Fantom',
            rpcUrls: [
              'https://rpc.ankr.com/fantom',
              'https://rpc.ftm.tools',
            ],
            nativeCurrency: {
              name: 'Fantom',
              symbol: 'FTM',
              decimals: 18,
            },
            blockExplorerUrls: ['https://ftmscan.com'],
          },
        ],
        explorer: {
          name: 'FTMScan',
          url: 'https://ftmscan.com',
          icon: '/logos/explorers/ftmscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/fantom.png',
        color: '#1869ff',
        website: 'https://fantom.foundation',
        coingecko_id: 'fantom',
      },
      {
        id: 'gnosis',
        chain_id: 100,
        domain_id: '2019844457',
        name: 'Gnosis',
        short_name: 'GNO',
        provider_params: [
          {
            chainId: '0x64',
            chainName: 'Gnosis',
            rpcUrls: [
              'https://rpc.ankr.com/gnosis',
            ],
            nativeCurrency: {
              name: 'xDAI',
              symbol: 'xDAI',
              decimals: 18,
            },
            blockExplorerUrls: ['https://gnosisscan.io'],
          },
        ],
        explorer: {
          name: 'Gnosisscan',
          url: 'https://gnosisscan.io',
          icon: '/logos/explorers/gnosisscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/gnosis.png',
        color: '#48a9a6',
        website: 'https://gnosischain.com',
        coingecko_id: 'gnosis',
      },
      {
        id: 'moonbeam',
        chain_id: 1284,
        domain_id: '1650811245',
        name: 'Moonbeam',
        short_name: 'MBEAM',
        provider_params: [
          {
            chainId: '0x504',
            chainName: 'Moonbeam',
            rpcUrls: [
              'https://rpc.ankr.com/moonbeam',
              'https://rpc.api.moonbeam.network',
            ],
            nativeCurrency: {
              name: 'Moonbeam',
              symbol: 'GLMR',
              decimals: 18,
            },
            blockExplorerUrls: ['https://moonscan.io'],
          },
        ],
        explorer: {
          name: 'Moonscan',
          url: 'https://moonscan.io',
          icon: '/logos/explorers/moonbeam.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/moonbeam.png',
        color: '#53cbc8',
        website: 'https://moonbeam.network',
        coingecko_id: 'moonbeam',
      },
      {
        id: 'moonriver',
        chain_id: 1285,
        name: 'Moonriver',
        short_name: 'MOVR',
        provider_params: [
          {
            chainId: '0x505',
            chainName: 'Moonriver',
            rpcUrls: [
              'https://rpc.api.moonriver.moonbeam.network',
            ],
            nativeCurrency: {
              name: 'Moonriver',
              symbol: 'MOVR',
              decimals: 18,
            },
            blockExplorerUrls: ['https://moonriver.moonscan.io'],
          },
        ],
        explorer: {
          name: 'Moonscan',
          url: 'https://moonriver.moonscan.io',
          icon: '/logos/explorers/moonriver.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/moonriver.png',
        color: '#e6af07',
        website: 'https://moonbeam.network/networks/moonriver',
        coingecko_id: 'moonriver',
      },
      {
        id: 'fuse',
        chain_id: 122,
        name: 'Fuse',
        short_name: 'FUSE',
        provider_params: [
          {
            chainId: '0x7a',
            chainName: 'Fuse',
            rpcUrls: [
              'https://rpc.fuse.io',
            ],
            nativeCurrency: {
              name: 'Fuse',
              symbol: 'FUSE',
              decimals: 18,
            },
            blockExplorerUrls: ['https://explorer.fuse.io'],
          },
        ],
        explorer: {
          name: 'Fuse Explorer',
          url: 'https://explorer.fuse.io',
          icon: '/logos/explorers/fuse.png',
          block_path: '/blocks/{block}',
          address_path: '/address/{address}',
          contract_path: '/tokens/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/fuse.png',
        color: '#fde047',
        website: 'https://fuse.io',
        coingecko_id: 'fuse-network-token',
      },
      {
        id: 'gather',
        chain_id: 192837465,
        name: 'Gather',
        short_name: 'GTH',
        provider_params: [
          {
            chainId: '0xb7e7759',
            chainName: 'Gather',
            rpcUrls: [
              'https://mainnet.gather.network',
            ],
            nativeCurrency: {
              name: 'Gather',
              symbol: 'GTH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://explorer.gather.network'],
          },
        ],
        explorer: {
          name: 'Gather',
          url: 'https://explorer.gather.network',
          icon: '/logos/explorers/gather.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/address/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/gather.png',
        color: '#3c4fe0',
        website: 'https://gather.network',
        coingecko_id: 'gather',
      },
      {
        id: 'milkomeda',
        chain_id: 2001,
        domain_id: '25393',
        name: 'Milkomeda',
        short_name: 'MMEDA',
        provider_params: [
          {
            chainId: '0x7d1',
            chainName: 'Milkomeda',
            rpcUrls: [
              'https://rpc.c1.milkomeda.com:8545',
            ],
            nativeCurrency: {
              name: 'MilkADA',
              symbol: 'mADA',
              decimals: 18,
            },
            blockExplorerUrls: ['https://rpc.c1.milkomeda.com:4000'],
          },
        ],
        explorer: {
          name: 'BlockScout',
          url: 'https://rpc.c1.milkomeda.com:4000',
          icon: '/logos/explorers/blockscout.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/milkomeda.png',
        color: '#a4b2d8',
        website: 'https://milkomeda.com',
        coingecko_id: 'cardano',
      },     
      {
        id: 'cronos',
        chain_id: 25,
        name: 'Cronos',
        short_name: 'CRO',
        provider_params: [
          {
            chainId: '0x19',
            chainName: 'Cronos',
            rpcUrls: [
              'https://evm.cronos.org',
            ],
            nativeCurrency: {
              name: 'Cronos',
              symbol: 'CRO',
              decimals: 18,
            },
            blockExplorerUrls: ['https://cronoscan.com'],
          },
        ],
        explorer: {
          name: 'Cronoscan',
          url: 'https://cronoscan.com',
          icon: '/logos/explorers/cronoscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/cronos.png',
        color: '#012d74',
        website: 'https://crypto.com',
        coingecko_id: 'crypto-com-chain',
      },
      {
        id: 'evmos',
        chain_id: 9001,
        domain_id: '1702260083',
        name: 'Evmos',
        short_name: 'EVMOS',
        provider_params: [
          {
            chainId: '0x2329',
            chainName: 'Evmos',
            rpcUrls: [
              'https://eth.bd.evmos.org:8545',
            ],
            nativeCurrency: {
              name: 'Evmos',
              symbol: 'EVMOS',
              decimals: 18,
            },
            blockExplorerUrls: ['https://evm.evmos.org'],
          },
        ],
        explorer: {
          name: 'Evmos',
          url: 'https://evm.evmos.org',
          icon: '/logos/explorers/evmos.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/address/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/evmos.png',
        color: '#1f1577',
        website: 'https://evmos.org',
        coingecko_id: 'evmos',
      },
      {
        id: 'boba',
        chain_id: 288,
        name: 'Boba',
        short_name: 'BOBA',
        provider_params: [
          {
            chainId: '0x120',
            chainName: 'Boba',
            rpcUrls: [
              'https://mainnet.boba.network',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://blockexplorer.boba.network'],
          },
        ],
        explorer: {
          name: 'Boba',
          url: 'https://blockexplorer.boba.network',
          icon: '/logos/explorers/boba.png',
          block_path: '/blocks/{block}',
          address_path: '/address/{address}',
          contract_path: '/tokens/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/boba.png',
        color: '#cbff00',
        website: 'https://boba.network',
        coingecko_id: 'boba-network',
      },
      {
        id: 'harmony',
        chain_id: 1666600000,
        name: 'Harmony',
        short_name: 'HONE',
        provider_params: [
          {
            chainId: '0x120',
            chainName: 'Harmony',
            rpcUrls: [
              'https://rpc.ankr.com/harmony',
              'https://api.harmony.one',
            ],
            nativeCurrency: {
              name: 'One',
              symbol: 'ONE',
              decimals: 18,
            },
            blockExplorerUrls: ['https://explorer.harmony.one'],
          },
        ],
        explorer: {
          name: 'Harmony',
          url: 'https://explorer.harmony.one',
          icon: '/logos/explorers/harmony.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/address/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/harmony.png',
        color: '#42decd',
        website: 'https://harmony.one',
        coingecko_id: 'harmony',
      },
    ],
  },
  testnet: {
    evm: [
      {
        id: 'rinkeby',
        chain_id: 4,
        domain_id: '1111',
        name: 'Rinkeby',
        short_name: 'RIN',
        provider_params: [
          {
            chainId: '0x4',
            chainName: 'Ethereum Rinkeby',
            rpcUrls: [
              'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://rinkeby.etherscan.io'],
          },
        ],
        explorer: {
          name: 'Etherscan',
          url: 'https://rinkeby.etherscan.io',
          icon: '/logos/explorers/etherscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/rinkeby.png',
        color: '#c0c2c3',
        website: 'https://rinkeby.io',
        coingecko_id: 'ethereum',
      },
      {
        id: 'gorli',
        chain_id: 5,
        domain_id: '1735353714',
        name: 'Görli',
        short_name: 'GOR',
        provider_params: [
          {
            chainId: '0x5',
            chainName: 'Ethereum Görli',
            rpcUrls: [
              'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://goerli.etherscan.io'],
          },
        ],
        explorer: {
          name: 'Etherscan',
          url: 'https://goerli.etherscan.io',
          icon: '/logos/explorers/etherscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/gorli.png',
        color: '#c0c2c3',
        website: 'https://goerli.net',
        coingecko_id: 'ethereum',
      },
      /*{
        id: 'kovan',
        chain_id: 42,
        domain_id: '2221',
        name: 'Kovan',
        short_name: 'KOV',
        provider_params: [
          {
            chainId: '0x2a',
            chainName: 'Ethereum Kovan',
            rpcUrls: [
              'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://kovan.etherscan.io'],
          },
        ],
        explorer: {
          name: 'Etherscan',
          url: 'https://kovan.etherscan.io',
          icon: '/logos/explorers/etherscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/kovan.png',
        color: '#c0c2c3',
        website: 'https://kovan-testnet.github.io/website',
        coingecko_id: 'ethereum',
        view_only: true,
      },
      {
        id: 'binance',
        chain_id: 97,
        name: 'BNB Chain',
        short_name: 'BNB',
        provider_params: [
          {
            chainId: '0x61',
            chainName: 'BNB Chain Testnet',
            rpcUrls: [
              'https://data-seed-prebsc-1-s1.binance.org:8545',
              'https://data-seed-prebsc-2-s1.binance.org:8545',
              'https://data-seed-prebsc-1-s2.binance.org:8545',
            ],
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            blockExplorerUrls: ['https://testnet.bscscan.com'],
          },
        ],
        explorer: {
          name: 'BscScan',
          url: 'https://testnet.bscscan.com',
          icon: '/logos/explorers/bscscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/binance.png',
        color: '#e8b30b',
        website: 'https://bnbchain.world',
        coingecko_id: 'binancecoin',
      },*/
      {
        id: 'mumbai',
        chain_id: 80001,
        domain_id: '9991',
        name: 'Polygon',
        short_name: 'MUM',
        provider_params: [
          {
            chainId: '0x13881',
            chainName: 'Polygon Mumbai',
            rpcUrls: [
              'https://polygon-mumbai.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://matic-mumbai.chainstacklabs.com',
            ],
            nativeCurrency: {
              name: 'Polygon',
              symbol: 'MATIC',
              decimals: 18,
            },
            blockExplorerUrls: ['https://mumbai.polygonscan.com'],
          },
        ],
        explorer: {
          name: 'Polygonscan',
          url: 'https://mumbai.polygonscan.com',
          icon: '/logos/explorers/polygonscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/mumbai.png',
        color: '#8247e5',
        website: 'https://polygon.technology',
        coingecko_id: 'matic-network',
      },
      {
        id: 'optimism',
        chain_id: 420,
        domain_id: '1735356532',
        name: 'Optimism',
        short_name: 'OPT',
        provider_params: [
          {
            chainId: '0x1a4',
            chainName: 'Optimism Görli',
            rpcUrls: [
              'https://goerli.optimism.io',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'oETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://blockscout.com/optimism/goerli'],
          },
        ],
        explorer: {
          name: 'Optimism',
          url: 'https://blockscout.com/optimism/goerli',
          icon: '/logos/explorers/optimism.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/optimism.png',
        color: '#dc2626',
        website: 'https://optimism.io',
        coingecko_id: 'ethereum',
      },
      /*{
        id: 'arbitrum',
        chain_id: 421611,
        name: 'Arbitrum',
        short_name: 'ARB',
        provider_params: [
          {
            chainId: '0x66eeb',
            chainName: 'Arbitrum Rinkeby',
            rpcUrls: [
              'https://rinkeby.arbitrum.io/rpc',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'aETH',
              decimals: 18,
            },
            blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io/#/'],
          },
        ],
        explorer: {
          name: 'Arbiscan',
          url: 'https://testnet.arbiscan.io',
          icon: '/logos/explorers/arbiscan.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/arbitrum.png',
        color: '#28a0f0',
        website: 'https://arbitrum.io',
        coingecko_id: 'arbitrum',
      },
      {
        id: 'moonbase',
        chain_id: 1287,
        domain_id: '5000',
        name: 'Moonbase',
        short_name: 'MBASE',
        provider_params: [
          {
            chainId: '0x507',
            chainName: 'Moonbase Alpha',
            rpcUrls: [
              'https://rpc.api.moonbase.moonbeam.network',
            ],
            nativeCurrency: {
              name: 'Dev',
              symbol: 'DEV',
              decimals: 18,
            },
            blockExplorerUrls: ['https://moonbase.moonscan.io'],
          },
        ],
        explorer: {
          name: 'Moonscan',
          url: 'https://moonbase.moonscan.io',
          icon: '/logos/explorers/moonbeam.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/moonbase.png',
        color: '#53cbc8',
        website: 'https://moonbeam.network',
        coingecko_id: 'moonbeam',
      },
      {
        id: 'kava',
        chain_id: 2221,
        name: 'Kava',
        short_name: 'KAVA',
        provider_params: [
          {
            chainId: '0x8ad',
            chainName: 'Kava Alphanet',
            rpcUrls: [
              'https://evm.evm-alpha.kava.io',
            ],
            nativeCurrency: {
              name: 'Kava',
              symbol: 'KAVA',
              decimals: 18,
            },
            blockExplorerUrls: ['https://explorer.evm-alpha.kava.io'],
          },
        ],
        explorer: {
          name: 'Kava',
          url: 'https://explorer.evm-alpha.kava.io',
          icon: '/logos/explorers/kava.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/kava.png',
        color: '#ff554f',
        website: 'https://kava.io',
        coingecko_id: 'kava',
      },*/
    ],
  },
};