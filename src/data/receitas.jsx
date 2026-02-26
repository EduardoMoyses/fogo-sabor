import paoOvo from '../img/alimentos/cafe/pao-com-ovo.jpg'
import panqueca from '../img/alimentos/cafe/panqueca.jpg'
import tapioca from '../img/alimentos/cafe/tapioca.jpg'
import omelete from '../img/alimentos/cafe/omelete.jpg'
import vitaminaBanana from '../img/alimentos/cafe/vitamina-banana.jpg'
import mingauAveia from '../img/alimentos/cafe/mingau-aveia.jpg'
import bolo from '../img/alimentos/cafe/bolo-simples.jpg'
import cuscuz from '../img/alimentos/cafe/cuscuz.jpg'
import paoQueijo from '../img/alimentos/cafe/pao-de-queijo.jpg'
import saladaFrutas from '../img/alimentos/cafe/frutas.jpg'


import arrozFeijao from '../img/alimentos/almoco/arroz-feijao.jpg'
import strogonoff from '../img/alimentos/almoco/strogonoff.jpg'
import bife from '../img/alimentos/almoco/bife.jpg'
import frango from '../img/alimentos/almoco/frango-grelhado.jpg'
import lasanha from '../img/alimentos/almoco/lasanha.jpg'
import feijoada from '../img/alimentos/almoco/feijoada.jpg'
import peixe from '../img/alimentos/almoco/peixe.jpg'
import pure from '../img/alimentos/almoco/pure.jpg'
import arrozForno from '../img/alimentos/almoco/arroz-forno.jpg'
import salada from '../img/alimentos/almoco/salada.jpg'

import boloChocolate from '../img/alimentos/sobremesas/bolo-de-chocolate.jpg'
import brigadeiro from '../img/alimentos/sobremesas/brigadeiro.jpg'
import brownie from '../img/alimentos/sobremesas/brownie.jpg'
import doceLeite from '../img/alimentos/sobremesas/doce-de-leite.jpg'
import gelatina from '../img/alimentos/sobremesas/gelatina.jpg'
import mousse from '../img/alimentos/sobremesas/mousse.jpg'
import pave from '../img/alimentos/sobremesas/pave.jpg'
import pudim from '../img/alimentos/sobremesas/pudim.jpg'
import sorvete from '../img/alimentos/sobremesas/sorvete.jpg'
import tortaLimao from '../img/alimentos/sobremesas/torta-limao.jpg'


import alhoOleo from '../img/alimentos/massas/macarrao.jpg'
import carbonara from '../img/alimentos/massas/carbonara.jpg'
import bolonhesa from '../img/alimentos/massas/bolonhesa.jpg'
import lasanhaMassa from '../img/alimentos/massas/lasanha-massa.jpg'
import penne from '../img/alimentos/massas/penne.jpg'
import nhoque from '../img/alimentos/massas/nhoque.jpg'
import espaguete from '../img/alimentos/massas/espaguete.jpg'
import ravioli from '../img/alimentos/massas/ravioli.jpg'
import canelone from '../img/alimentos/massas/canelone.jpg'
import macCheese from '../img/alimentos/massas/mac-cheese.jpg'

import picanha from '../img/alimentos/carnes/picanha.jpg'
import frangoAssado from '../img/alimentos/carnes/frango-assado.jpg'
import costela from '../img/alimentos/carnes/costela.jpg'
import hamburguer from '../img/alimentos/carnes/hamburguer.jpg'
import bifeGrelhado from '../img/alimentos/carnes/bife-grelhado.jpg'
import carnePanela from '../img/alimentos/carnes/carne-panela.jpg'
import linguica from '../img/alimentos/carnes/linguica.jpg'
import fileMignon from '../img/alimentos/carnes/file-mignon.jpg'
import frangoXadrez from '../img/alimentos/carnes/frango-xadrez.jpg'
import carneMoida from '../img/alimentos/carnes/carne-moida.jpg'

export const dificuldadeConfig = {
  fácil: {
    texto: 'Easy',
    icone: 'fa-solid fa-bolt'
  },
  médio: {
    texto: 'Médio',
    icone: 'fa-solid fa-fire'
  },
  difícil: {
    texto: 'Hard',
    icone: 'fa-solid fa-skull'
  }
}


const receitas = {
  categorias: [
    {
      id: 'cafe',
      nome: 'Café da Manhã',
      receitas: [
        { 
          id: 'pao-ovo',
          nome: 'Pão com Ovo',
          tempo: '5 min', 
          dificuldade: 'fácil', 
          imagem: paoOvo,
          ingredientes: [
            '2 fatias de pão',
            '1 ovo'
          ],
          preparo: [
            'Aqueça a frigideira',
            'Frite o ovo',
            'Monte o sanduíche'
          ]
         },
        { 
          id: 'panqueca', 
          nome: 'Panqueca', 
          tempo: '20 min',
          dificuldade: 'fácil', 
          imagem: panqueca, 
          ingredientes: [
            '1 xícara de farinha de trigo',
            '1 xícara de leite',
            '1 ovo',
            '1 pitada de sal',
            '1 colher de sopa de óleo'
          ],
          preparo: [
            'Misture todos os ingredientes no liquidificador',
            'Aqueça uma frigideira antiaderente',
            'Despeje uma concha da massa',
            'Doure dos dois lados',
            'Recheie a gosto e sirva'
          ] },
        { 
          id: 'tapioca',
           nome: 'Tapioca',
           tempo: '10 min',
           dificuldade: 'fácil',
           imagem: tapioca,
           ingredientes: [
              '3 colheres de sopa de goma de tapioca',
              'Sal a gosto',
              'Recheio a gosto'
            ],
            preparo: [
              'Aqueça uma frigideira',
              'Espalhe a goma peneirada',
              'Deixe firmar',
              'Adicione o recheio',
              'Dobre ao meio e sirva'
            ]

         },
        { 
          id: 'omelete',
           nome: 'Omelete',
           tempo: '10 min',
           dificuldade: 'fácil',
           imagem: omelete,
           ingredientes: [
              '2 ovos',
              'Sal a gosto',
              'Pimenta a gosto',
              'Queijo e presunto a gosto'
            ],
            preparo: [
              'Bata os ovos com sal e pimenta',
              'Despeje em frigideira aquecida',
              'Adicione o recheio',
              'Dobre ao meio quando firmar',
              'Sirva quente'
            ]

         },
        { 
          id: 'vitamina',
          nome: 'Vitamina',
          tempo: '5 min',
          dificuldade: 'fácil',
          imagem: vitaminaBanana,
          ingredientes: [
            '2 bananas',
            '1 copo de leite',
            '1 colher de açúcar',
            'Gelo a gosto'
          ],
          preparo: [
            'Coloque todos os ingredientes no liquidificador',
            'Bata até ficar homogêneo',
            'Sirva gelado'
          ]

         },
        { 
          id: 'mingau',
           nome: 'Mingau',
           tempo: '10 min',
           dificuldade: 'fácil',
           imagem: mingauAveia,
           ingredientes: [
              '2 colheres de aveia',
              '1 copo de leite',
              '1 colher de açúcar'
            ],
            preparo: [
              'Misture tudo em uma panela',
              'Leve ao fogo médio mexendo sempre',
              'Cozinhe até engrossar',
              'Sirva quente'
            ]

         },
        { 
          id: 'bolo',
           nome: 'Bolo',
           tempo: '40 min',
           dificuldade: 'fácil',
           imagem: bolo,
           ingredientes: [
              '2 xícaras de farinha',
              '1 xícara de açúcar',
              '3 ovos',
              '1/2 xícara de óleo',
              '1 colher de fermento'
            ],
            preparo: [
              'Misture os ingredientes líquidos',
              'Adicione os secos',
              'Mexa até ficar homogêneo',
              'Asse em forno 180° por 40 minutos'
            ]

         },
        { 
          id: 'cuscuz',
           nome: 'Cuscuz',
           tempo: '15 min',
           dificuldade: 'fácil',
           imagem: cuscuz,
           ingredientes: [
              '1 xícara de flocão de milho',
              '1/2 xícara de água',
              'Sal a gosto'
            ],
            preparo: [
              'Misture o flocão com água e sal',
              'Deixe hidratar por 5 minutos',
              'Coloque na cuscuzeira',
              'Cozinhe por 10 minutos'
            ]

         },
        { 
          id: 'pao-queijo',
           nome: 'Pão de Queijo',
           tempo: '30 min',
           dificuldade: 'médio',
           imagem: paoQueijo,
           ingredientes: [
              '2 xícaras de polvilho',
              '1 xícara de queijo ralado',
              '1/2 xícara de leite',
              '1/4 xícara de óleo',
              '1 ovo'
            ],
            preparo: [
              'Misture todos os ingredientes',
              'Modele bolinhas',
              'Coloque em forma untada',
              'Asse por 30 minutos a 180°'
            ]


         },
        { 
          id: 'salada-frutas',
           nome: 'Salada de Frutas',
           tempo: '10 min',
           dificuldade: 'fácil',
           imagem: saladaFrutas,
           ingredientes: [
              '1 banana',
              '1 maçã',
              '1 fatia de mamão',
              'Suco de 1 laranja'
            ],
            preparo: [
              'Pique todas as frutas',
              'Misture em uma tigela',
              'Adicione o suco de laranja',
              'Sirva gelado'
            ]

         },
      ]
    },

    {
      id: 'almoco',
      nome: 'Almoço',
      receitas: [
        { 
          id: 'arroz-feijao',
          nome: 'Arroz com Feijão',
          tempo: '30 min',
          dificuldade: 'fácil',
          imagem: arrozFeijao,
          ingredientes: [
            '1 xícara de arroz',
            '1 xícara de feijão cozido',
            '2 dentes de alho',
            'Sal a gosto'
          ],
          preparo: [
  '         Refogue o alho',
            'Adicione o arroz e água',
            'Cozinhe até secar',
            'Sirva com feijão aquecido'
          ]

         },
        { 
          id: 'strogonoff',
          nome: 'Strogonoff',
          tempo: '40 min',
          dificuldade: 'médio',
          imagem: strogonoff,
          ingredientes: [
            '500g de frango ou carne',
            '1 caixa de creme de leite',
            '2 colheres de ketchup',
            '1 cebola'
          ],
          preparo: [
            'Refogue a cebola',
            'Adicione a carne e doure',
            'Coloque ketchup e creme de leite',
            'Cozinhe por 5 minutos'
          ]

         },
        { 
          id: 'bife',
          nome: 'Bife Acebolado',
          tempo: '25 min',
          dificuldade: 'fácil',
          imagem: bife,
          ingredientes: [
            '2 bifes',
            '1 cebola em rodelas',
            'Sal a gosto',
            'Óleo'
          ],
          preparo: [
            'Tempere o bife',
            'Frite em óleo quente',
            'Adicione a cebola',
            'Deixe dourar e sirva'
          ]

         },

        { 
          id: 'frango',
          nome: 'Frango Grelhado',
          tempo: '30 min',
          dificuldade: 'fácil',
          imagem: frango,
          ingredientes: [
              '2 filés de frango',
              'Sal a gosto',
              'Alho picado',
              '1 colher de azeite'
          ],
          preparo: [
            'Tempere o frango',
            'Aqueça o azeite',
            'Grelhe 5 minutos cada lado',
            'Sirva quente'
          ]
         },
        { 
          id: 'lasanha',
          nome: 'Lasanha',
          tempo: '60 min',
          dificuldade: 'médio',
          imagem: lasanha,
          ingredientes: [
            'Massa para lasanha',
            '300g carne moída',
            'Molho de tomate',
            'Queijo e presunto'
          ],
          preparo: [
            'Refogue a carne',
            'Monte camadas',
            'Finalize com queijo',
            'Asse por 40 minutos'
          ]
         },
        { 
          id: 'feijoada',
          nome: 'Feijoada',
          tempo: '90 min',
          dificuldade: 'difícil',
          imagem: feijoada,
          ingredientes: [
            '500g feijão preto',
            'Carne seca',
            'Linguiça',
            'Alho e cebola'
          ],
          preparo: [
            'Cozinhe o feijão',
            'Adicione as carnes',
            'Tempere',
            'Cozinhe até engrossar'
          ]
         },
        { 
          id: 'peixe',
          nome: 'Peixe Assado',
          tempo: '35 min',
          dificuldade: 'médio',
          imagem: peixe,
          ingredientes: [
            '2 filés de peixe',
            'Limão',
            'Sal',
            'Azeite'
          ],
          preparo: [
            'Tempere o peixe',
            'Coloque em forma',
            'Asse por 30 minutos'
          ]
         },
        { 
          id: 'pure',
          nome: 'Purê de Batata',
          tempo: '25 min',
          dificuldade: 'fácil',
          imagem: pure,
          ingredientes: [
            '3 batatas',
            '1 colher de manteiga',
            '1/2 xícara de leite',
            'Sal'
          ],
          preparo: [
            'Cozinhe as batatas',
            'Amasse',
            'Misture manteiga e leite',
            'Tempere'
          ]
         },
        { 
          
          id: 'arroz-forno',
          nome: 'Arroz de Forno',
          tempo: '45 min',
          dificuldade: 'médio',
          imagem: arrozForno,
          ingredientes: [
            '2 xícaras arroz cozido',
            'Frango desfiado',
            'Milho',
            'Queijo'
          ],
          preparo: [
            'Misture tudo',
            'Coloque em forma',
            'Cubra com queijo',
            'Asse por 20 minutos'
          ]
          },
        {
          id: 'salada', nome: 'Salada',
          tempo: '10 min',
          dificuldade: 'fácil',
          imagem: salada,
            ingredientes: [
            'Alface',
            'Tomate',
            'Cenoura',
            'Azeite e sal'
          ],
          preparo: [
            'Lave os ingredientes',
            'Pique',
            'Misture e tempere'
          ]
            },
      ]   },
    {   
      id: 'sobremesas',
      nome: 'Sobremesas',
      receitas: [
        { 
          id: 'brigadeiro',
          nome: 'Brigadeiro',
          tempo: '20 min',
          dificuldade: 'fácil',
          imagem: brigadeiro,
          ingredientes: [
            '1 lata leite condensado',
            '1 colher manteiga',
            '3 colheres chocolate'
          ],
          preparo: [
            'Misture tudo na panela',
            'Mexa até desgrudar',
            'Deixe esfriar e enrole'
          ]
         },
        { 
          id: 'pudim',
           nome: 'Pudim',
           tempo: '60 min',
           dificuldade: 'médio',
           imagem: pudim,
          ingredientes: [
            '1 lata de leite condensado',
            '2 medidas de leite',
            '3 ovos',
            '1 xícara de açúcar'
          ],
          preparo: [
            'Derreta o açúcar para calda',
            'Bata os demais ingredientes',
            'Despeje na forma',
            'Asse em banho-maria por 60 minutos'
          ]

         },
        { 
          id: 'mousse',
          nome: 'Mousse',
          tempo: '15 min',
          dificuldade: 'fácil', 
          imagem: mousse,
          ingredientes: [
            '1 lata creme de leite',
            '1 lata leite condensado',
            'Suco em pó'
          ],
          preparo: [
            'Bata tudo',
            'Leve à geladeira por 2 horas'
          ]
         },
        { 
          id: 'bolo-chocolate',
          nome: 'Bolo de Chocolate',
          tempo: '50 min',
          dificuldade: 'médio',
          imagem: boloChocolate,
          ingredientes: [
            '2 xícaras farinha',
            '1 xícara açúcar',
            '1 xícara chocolate em pó',
            '3 ovos'
          ],
          preparo: [
            'Misture tudo',
            'Coloque em forma',
            'Asse por 40 minutos'
          ]
         },
        { 
          id: 'pave',
          nome: 'Pavê',
          tempo: '30 min',
          dificuldade: 'fácil',
          imagem: pave,
           ingredientes: [
            'Biscoito maisena',
            'Creme',
            'Chocolate'
          ],
          preparo: [
            'Faça o creme',
            'Monte camadas',
            'Leve à geladeira'
          ]
         },
        { 
          id: 'torta-limao',
          nome: 'Torta de Limão',
          tempo: '40 min',
          dificuldade: 'médio',
          imagem: tortaLimao,
          ingredientes: [
            'Base de biscoito',
            'Leite condensado',
            'Limão',
            'Creme de leite'
          ],
          preparo: [
            'Prepare a base',
            'Misture o recheio',
            'Leve à geladeira'
          ]
         },
        { 
          id: 'doce-leite',
          nome: 'Doce de Leite',
          tempo: '20 min',
          dificuldade: 'fácil',
          imagem: doceLeite,
          ingredientes: [
            '1 lata leite condensado'
          ],
          preparo: [
            'Cozinhe na panela de pressão por 20 minutos'
          ]
         },
        { 
          id: 'gelatina',
          nome: 'Gelatina',
          tempo: '5 min',
          dificuldade: 'fácil',
          imagem: gelatina,
          ingredientes: [
            '1 pacote gelatina',
            '250ml água quente',
            '250ml água fria'
          ],
          preparo: [
            'Dissolva na água quente',
            'Adicione água fria',
            'Leve à geladeira'
          ]
         },
        { 
          id: 'brownie',
          nome: 'Brownie',
          tempo: '35 min',
          dificuldade: 'médio',
          imagem: brownie,
          ingredientes: [
          '200g chocolate',
          '100g manteiga',
          '2 ovos',
          '1 xícara açúcar'
        ],
        preparo: [
          'Derreta chocolate e manteiga',
          'Misture os outros ingredientes',
          'Asse por 30 minutos'
        ]
         },
        { 
          id: 'sorvete',
          nome: 'Sorvete',
          tempo: '10 min',
          dificuldade: 'fácil',
          imagem: sorvete,
          ingredientes: [
            '2 latas creme de leite',
            '1 lata leite condensado'
          ],
          preparo: [
            'Bata tudo',
            'Leve ao freezer por 4 horas'
          ]
         },
      ]
    },

    {
      id: 'massas',
      nome: 'Massas',
      receitas: [
        { 
          id: 'alho-oleo',
          nome: 'Alho e Óleo',
          tempo: '20 min', dificuldade: 'fácil',
          imagem: alhoOleo,
          ingredientes: [
            '250g macarrão',
            '3 dentes de alho',
            '3 colheres de azeite',
            'Sal a gosto'
          ],
          preparo: [
            'Cozinhe o macarrão',
            'Doure o alho no azeite',
            'Misture ao macarrão',
            'Sirva quente'
          ]
         },
        { 
          id: 'carbonara',
           nome: 'Carbonara',
           tempo: '30 min', dificuldade: 'médio',
           imagem: carbonara,
           ingredientes: [
              '250g de macarrão',
              '2 ovos',
              '100g de bacon',
              'Queijo ralado'
            ],
            preparo: [
              'Cozinhe o macarrão',
  '           Frite o bacon',
              'Misture ovos e queijo',
              'Junte tudo com o macarrão quente'
            ]

         },
        { 
          id: 'bolonhesa',
           nome: 'Bolonhesa',
           tempo: '35 min', dificuldade: 'médio',
           imagem: bolonhesa,
           ingredientes: [
              '250g de macarrão',
              '300g de carne moída',
              'Molho de tomate',
              'Alho'
            ],
            preparo: [
              'Cozinhe o macarrão',
              'Refogue a carne',
              'Adicione o molho',
              'Misture ao macarrão'
]

         },
        { 
          id: 'lasanha-massa',
          nome: 'Lasanha',
          tempo: '60 min', dificuldade: 'difícil',
          imagem: lasanhaMassa,
          ingredientes: [
            'Massa de lasanha',
            'Carne moída',
            'Molho de tomate',
            'Queijo e presunto'
          ],
          preparo: [
            'Prepare o molho com carne',
            'Monte camadas',
            'Cubra com queijo',
            'Asse por 40 minutos'
          ]
         },
        { 
          id: 'penne',
          nome: 'Penne', tempo: '25 min',
          dificuldade: 'fácil',
          imagem: penne,
          ingredientes: [
            '250g penne',
            'Molho de tomate',
            'Queijo ralado'
          ],
          preparo: [
            'Cozinhe o penne',
            'Aqueça o molho',
            'Misture e finalize com queijo'
          ]
         },
        { 
          id: 'nhoque',
          nome: 'Nhoque', tempo: '40 min',
          dificuldade: 'médio',
          imagem: nhoque,
          ingredientes: [
            '500g batata',
            '1 ovo',
            '1 xícara farinha',
            'Sal'
          ],
          preparo: [
            'Cozinhe e amasse a batata',
            'Misture os ingredientes',
            'Modele os nhoques',
            'Cozinhe até subir'
          ]
         },
        { 
          id: 'espaguete',
          nome: 'Espaguete', tempo: '25 min',
          dificuldade: 'fácil',
          imagem: espaguete,
          ingredientes: [
          '250g espaguete',
          'Molho de tomate',
          'Sal'
        ],
        preparo: [
          'Cozinhe o espaguete',
          'Aqueça o molho',
          'Misture e sirva'
        ]
         },
        { 
          id: 'ravioli',
          nome: 'Ravioli', tempo: '45 min',
          dificuldade: 'médio',
          imagem: ravioli,
          ingredientes: [
            'Ravioli pronto',
            'Molho de tomate',
            'Queijo ralado'
          ],
          preparo: [
            'Cozinhe o ravioli',
            'Aqueça o molho',
            'Misture e finalize com queijo'
          ]
         },
        { 
          id: 'canelone',
           nome: 'Canelone',
           tempo: '50 min',
           dificuldade: 'médio',
           imagem: canelone,
          ingredientes: [
            'Massa de canelone',
            'Presunto',
            'Queijo',
            'Molho de tomate'
          ],
          preparo: [
            'Recheie a massa',
            'Cubra com molho',
            'Asse por 30 minutos'
          ]
          },
        { 
          id: 'mac-cheese',
          nome: 'Mac and Cheese',
          tempo: '30 min',
          dificuldade: 'fácil',
          imagem: macCheese,
          ingredientes: [
            '250g macarrão',
            '1 xícara queijo cheddar',
            '1/2 xícara leite',
            '1 colher manteiga'
          ],
          preparo: [
            'Cozinhe o macarrão',
            'Derreta manteiga',
            'Adicione leite e queijo',
            'Misture ao macarrão'
          ]
         },
      ]
    },

    {
      id: 'carnes',
      nome: 'Carnes',
      receitas: [
        { 
          id: 'picanha',
          nome: 'Picanha',
          tempo: '40 min',
          dificuldade: 'médio',
          imagem: picanha,
          ingredientes: [
            '1 peça de picanha',
            'Sal grosso'
          ],
          preparo: [
            'Tempere com sal grosso',
            'Leve à churrasqueira',
            'Asse 20 minutos cada lado'
          ]
         },
        { 
          id: 'frango-assado',
          nome: 'Frango Assado',
          tempo: '90 min',
          dificuldade: 'médio',
          imagem: frangoAssado,
          ingredientes: [
            '1 frango inteiro',
            'Alho',
            'Sal',
            'Limão'
          ],
          preparo: [
            'Tempere o frango',
            'Coloque em forma',
            'Asse por 1h30'
          ]
         },
        { 
          id: 'costela',
          nome: 'Costela',
          tempo: '120 min',
          dificuldade: 'difícil',
          imagem: costela,
          ingredientes: [
            '1kg costela',
            'Sal grosso'
          ],
          preparo: [
            'Tempere',
            'Leve ao forno ou churrasqueira',
            'Asse por 2 horas'
          ]
         },
        { 
          id: 'hamburguer',
          nome: 'Hambúrguer',
          tempo: '25 min',
          dificuldade: 'fácil',
          imagem: hamburguer,
          ingredientes: [
            '500g carne moída',
            'Sal',
            'Pimenta'
          ],
          preparo: [
            'Modele os hambúrgueres',
            'Tempere',
            'Grelhe 5 minutos cada lado'
          ]
        },
        { 
          id: 'bife-grelhado',
          nome: 'Bife Grelhado',
          tempo: '20 min',
          dificuldade: 'fácil',
          imagem: bifeGrelhado,
          ingredientes: [
            '2 bifes',
            'Sal',
            'Óleo'
          ],
          preparo: [
            'Tempere',
            'Aqueça a frigideira',
            'Grelhe até o ponto desejado'
          ]
        },
        { 
          id: 'carne-panela',
          nome: 'Carne de Panela',
          tempo: '70 min',
          dificuldade: 'médio',
          imagem: carnePanela,
          ingredientes: [
            '500g carne',
            'Batata',
            'Cenoura',
            'Alho'
          ],
        preparo: [
          'Refogue a carne',
          'Adicione legumes',
          'Cozinhe até ficar macia'
        ]
        },
        { 
          id: 'linguica',
          nome: 'Linguiça',
          tempo: '30 min',
          dificuldade: 'fácil',
          imagem: linguica,
          ingredientes: [
            '500g linguiça'
          ],
          preparo: [
            'Coloque em forma',
            'Asse por 30 minutos'
          ]

         },
        { 
          id: 'file-mignon',
          nome: 'Filé Mignon',
          tempo: '35 min',
          dificuldade: 'médio',
          imagem: fileMignon,
          ingredientes: [
            '2 medalhões filé mignon',
            'Sal',
            'Manteiga'
          ],
          preparo: [
            'Tempere',
            'Grelhe na manteiga',
            'Sirva ao ponto desejado'
          ]
        },
        { 
          id: 'frango-xadrez',
          nome: 'Frango Xadrez', tempo: '30 min',
          dificuldade: 'médio',
          imagem: frangoXadrez,
          ingredientes: [
            '500g frango em cubos',
            'Pimentão',
            'Molho shoyu',
            'Cebola'
          ],
          preparo: [
            'Refogue o frango',
            'Adicione legumes',
            'Coloque shoyu e cozinhe'
          ]
        },
        { 
          id: 'carne-moida', nome: 'Carne Moída',
          tempo: '25 min',
          dificuldade: 'fácil',
          imagem: carneMoida,
          ingredientes: [
            '500g carne moída',
            'Alho',
            'Cebola',
            'Sal'
          ],
          preparo: [
            'Refogue alho e cebola',
            'Adicione a carne',
            'Cozinhe até dourar'
          ]
          },
      ]
    }
  ]
}

export default receitas
