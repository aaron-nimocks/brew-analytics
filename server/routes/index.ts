import { schema } from '@kbn/config-schema';
import { IRouter } from '../../../../src/core/server';

export function defineRoutes(router: IRouter) {
  router.post(
    {
      path: '/api/brew_analytics/form_submit',
      validate: {
        params: schema.object({}, { unknowns: 'allow' }),
        body: schema.object({}, { unknowns: 'allow' }),
      },
    },
    async (ctx, req: any, res) => {

      const requestClient = ctx.core.elasticsearch.client.asCurrentUser;

      //const { body: result } = await requestClient.indices.create({ index: "omg" });
      //const { body: result } = await requestClient.indices.exists({ index: "omg" });
      //const { body: result } = await requestClient.xpack.info();
      //const { body: result } = await requestClient.ping();
      //const { body: result } = await requestClient.search({ index: "omg" })

      try {
        const { body: index_exists } = await requestClient.indices.exists({
          index: "brew-analytics"
        })

        if (index_exists === false) {
          await requestClient.indices.create({
            index: "brew-analytics",
            body: {
              mappings: {
                properties: {
                  brewTime: {
                    type: "half_float"
                  },
                  brewTemp: {
                    type: "half_float"
                  },
                  beanMass: {
                    type: "half_float"
                  },
                  waterMass: {
                    type: "half_float"
                  },
                  milkMass: {
                    type: "half_float"
                  },
                  roastDate: {
                    type: "date",
                    format: "MM-DD-YYYY"
                  },
                  drinkType: {
                    type: "keyword"
                  },
                  roastName: {
                    type: "keyword"
                  },
                  addOns: {
                    type: "keyword"
                  },
                  comments: {
                    type: "text"
                  }
                }
              }
            }
          })
        }
      }
      catch (err) {
        console.log(err);
      }

      try {
        await requestClient.transport.request({
          method: 'POST',
          path: 'brew-analytics/_doc',
          body: {
            drinkType: req.body.drinkType,
            roastName: req.body.roastName,
            roastDate: req.body.roastDate,
            brewTime: req.body.brewTime,
            brewTemp: req.body.brewTemp,
            beanMass: req.body.beanMass,
            waterMass: req.body.waterMass,
            milkMass: req.body.milkMass,
            comments: req.body.comments,
            addOns: req.body.addOns
          }
        })

        return res.ok({
          body: {
            "response": "success"
          },
        });

      }
      catch (err) {
        return res.ok({
          body: {
            "response": err
          },
        });

      }
    }
  );
}