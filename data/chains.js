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
              'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://rpc.builder0x69.io',
              'https://rpc.ankr.com/eth',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://etherscan.io',
            ],
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
        color: '#636890',
        website: 'https://ethereum.org',
        coingecko_id: 'ethereum',
      },
      {
        id: 'binance',
        chain_id: 56,
        domain_id: '6450786',
        name: 'BNB Chain',
        short_name: 'BNB',
        provider_params: [
          {
            chainId: '0x38',
            chainName: 'BNB Chain',
            rpcUrls: [
              'https://rpc.ankr.com/bsc',
              'https://1rpc.io/bnb',
              'https://bscrpc.com',
            ],
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://bscscan.com',
            ],
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
        domain_id: '1886350457',
        name: 'Polygon',
        short_name: 'MATIC',
        provider_params: [
          {
            chainId: '0x89',
            chainName: 'Polygon',
            rpcUrls: [
              'https://polygon-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://matic-mainnet.chainstacklabs.com',
              'https://poly-rpc.gateway.pokt.network',
              'https://polygon.blockpi.network/v1/rpc/public',
              'https://1rpc.io/matic',
              'https://rpc.ankr.com/polygon',
            ],
            nativeCurrency: {
              name: 'Polygon',
              symbol: 'MATIC',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://polygonscan.com',
            ],
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
      /*
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
            blockExplorerUrls: [
              'https://snowtrace.io',
            ],
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
      */
      {
        id: 'optimism',
        chain_id: 10,
        domain_id: '1869640809',
        name: 'Optimism',
        short_name: 'OPT',
        provider_params: [
          {
            chainId: '0xa',
            chainName: 'Optimism',
            rpcUrls: [
              'https://optimism-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://optimism.blockpi.network/v1/rpc/public',
              'https://1rpc.io/op',
              'https://rpc.ankr.com/optimism',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'oETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://optimistic.etherscan.io',
            ],
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
        gas_coingecko_id: 'ethereum',
      },
      {
        id: 'arbitrum',
        chain_id: 42161,
        domain_id: '1634886255',
        name: 'Arbitrum One',
        short_name: 'ARB',
        provider_params: [
          {
            chainId: '0xa4b1',
            chainName: 'Arbitrum One',
            rpcUrls: [
              'https://arbitrum-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://arbitrum.blockpi.network/v1/rpc/public',
              'https://arb1.arbitrum.io/rpc',
              'https://1rpc.io/arb',
              'https://rpc.ankr.com/arbitrum',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'aETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://arbiscan.io',
            ],
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
        id: 'gnosis',
        chain_id: 100,
        domain_id: '6778479',
        name: 'Gnosis',
        short_name: 'GNO',
        provider_params: [
          {
            chainId: '0x64',
            chainName: 'Gnosis',
            rpcUrls: [
              'https://xdai-rpc.gateway.pokt.network',
              'https://gnosischain-rpc.gateway.pokt.network',
              'https://gnosis.blockpi.network/v1/rpc/public',
              'https://rpc.gnosis.gateway.fm',
              'https://rpc.ankr.com/gnosis',
            ],
            nativeCurrency: {
              name: 'xDAI',
              symbol: 'xDAI',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://gnosisscan.io',
            ],
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
      /*
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
            blockExplorerUrls: [
              'https://nova-explorer.arbitrum.io',
            ],
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
      */
      /*
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
            blockExplorerUrls: [
              'https://ftmscan.com',
            ],
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
      */
      /*
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
            blockExplorerUrls: [
              'https://moonscan.io',
            ],
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
      */
    ],
  },
  testnet: {
    evm: [
      {
        id: 'goerli',
        chain_id: 5,
        domain_id: '1735353714',
        name: 'Goerli',
        short_name: 'GOR',
        provider_params: [
          {
            chainId: '0x5',
            chainName: 'Ethereum Goerli',
            rpcUrls: [
              'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://rpc.ankr.com/eth_goerli',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://goerli.etherscan.io',
            ],
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
        image: '/logos/chains/goerli.png',
        color: '#636890',
        website: 'https://goerli.net',
        coingecko_id: 'ethereum',
      },
      /*
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
              'https://bsc-testnet.public.blastapi.io',
              'https://rpc.ankr.com/bsc_testnet_chapel',
            ],
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://testnet.bscscan.com',
            ],
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
      },
      */
      {
        id: 'polygon',
        chain_id: 80001,
        domain_id: '9991',
        name: 'Polygon',
        short_name: 'MATIC',
        provider_params: [
          {
            chainId: '0x13881',
            chainName: 'Polygon Mumbai',
            rpcUrls: [
              'https://polygon-mumbai.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://matic-mumbai.chainstacklabs.com',
              'https://rpc.ankr.com/polygon_mumbai',
            ],
            nativeCurrency: {
              name: 'Polygon',
              symbol: 'MATIC',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://mumbai.polygonscan.com',
            ],
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
        image: '/logos/chains/polygon.png',
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
            chainName: 'Optimism Goerli',
            rpcUrls: [
              'https://optimism-goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              'https://rpc.ankr.com/optimism_testnet',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'oETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://goerli-optimism.etherscan.io',
            ],
          },
        ],
        explorer: {
          name: 'Etherscan',
          url: 'https://goerli-optimism.etherscan.io',
          icon: '/logos/explorers/etherscan.png',
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
        gas_coingecko_id: 'ethereum',
      },
      {
        id: 'arbitrum',
        chain_id: 421613,
        domain_id: '1734439522',
        name: 'Arbitrum',
        short_name: 'ARB',
        provider_params: [
          {
            chainId: '0x66eed',
            chainName: 'Arbitrum Goerli',
            rpcUrls: [
              'https://goerli-rollup.arbitrum.io/rpc',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'aETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://goerli.arbiscan.io',
            ],
          },
        ],
        explorer: {
          name: 'Arbiscan',
          url: 'https://goerli.arbiscan.io',
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
        id: 'consensys',
        chain_id: 59140,
        domain_id: '1668247156',
        name: 'ConsenSys zkEVM',
        short_name: 'ZKEVM',
        provider_params: [
          {
            chainId: '0xe704',
            chainName: 'ConsenSys zkEVM',
            rpcUrls: [
              'https://consensys-zkevm-goerli-prealpha.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://explorer.goerli.zkevm.consensys.net',
            ],
          },
        ],
        explorer: {
          name: 'BlockScout',
          url: 'https://explorer.goerli.zkevm.consensys.net',
          icon: '/logos/explorers/blockscout.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/token/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/consensys.png',
        color: '#264cc4',
        website: 'https://consensys.net',
        coingecko_id: '',
        gas_coingecko_id: 'ethereum',
      },
      {
        id: 'zksync',
        chain_id: 280,
        domain_id: '2053862260',
        name: 'zkSync',
        short_name: 'ZKSYNC',
        provider_params: [
          {
            chainId: '0x118',
            chainName: 'zkSync Era Goerli',
            rpcUrls: [
              'https://zksync2-testnet.zksync.dev',
            ],
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18,
            },
            blockExplorerUrls: [
              'https://goerli.explorer.zksync.io',
            ],
          },
        ],
        explorer: {
          name: 'zkSync',
          url: 'https://goerli.explorer.zksync.io',
          icon: '/logos/explorers/zksync.png',
          block_path: '/block/{block}',
          address_path: '/address/{address}',
          contract_path: '/address/{address}',
          contract_0_path: '/address/{address}',
          transaction_path: '/tx/{tx}',
        },
        image: '/logos/chains/zksync.png',
        color: '#12142b',
        website: 'https://zksync.io',
        coingecko_id: '',
        gas_coingecko_id: 'ethereum',
      },
      /*
      {
        id: 'moonbeam',
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
            blockExplorerUrls: [
              'https://moonbase.moonscan.io',
            ],
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
      */
    ],
  },
};