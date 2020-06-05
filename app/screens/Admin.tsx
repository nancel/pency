import React from "react";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Stack,
  Image,
  Button,
  Link,
  Text,
} from "@chakra-ui/core";

import ProductsAdminScreen from "~/product/screens/Admin";
import TenantAdminScreen from "~/tenant/screens/Admin";
import {Tenant} from "~/tenant/types";
import BoxIcon from "~/ui/icons/Box";
import SlidersIcon from "~/ui/icons/Sliders";
import HelpCircleIcon from "~/ui/icons/HelpCircle";
import LogOutIcon from "~/ui/icons/LogOut";
import IconButton from "~/ui/controls/IconButton";
import {useSession} from "~/session/hooks";
import Content from "~/ui/structure/Content";
import {useTranslation} from "~/hooks/translation";

interface Props {
  tenant: Tenant;
}

const AdminScreen: React.FC<Props> = ({tenant}) => {
  const {signOut} = useSession();
  const t = useTranslation();

  return (
    <Box as="main" backgroundColor="white" overflowY="auto">
      <Flex alignItems="center" boxShadow="sm" height={16} paddingY={2} position="relative">
        <Content paddingX={4}>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Stack isInline alignItems="center" spacing={2}>
              <Image alt="Hay Tiendas" src="/logo.png" height="50px" />
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href={`/${tenant.slug}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  _hover={{
                    backgroundColor: "primary.100",
                  }}
                  backgroundColor="primary.50"
                  rightIcon="external-link"
                  size="xs"
                  variant="ghost"
                  variantColor="primary"
                >
                  {t("admin.preview")}
                </Button>
              </Link>
            </Stack>
            <Stack isInline spacing={{base: 0, sm: 8}}>
              <Link
                href={`mailto:${process.env.MANTAINER_EMAIL}?subject=Consulta por la tienda`}
                lineHeight="normal"
              >
                <IconButton
                  isCollapsable
                  color="black"
                  fontWeight="500"
                  leftIcon={HelpCircleIcon}
                  variant="link"
                >
                  {t("common.help")}
                </IconButton>
              </Link>
              <IconButton
                isCollapsable
                color="black"
                fontWeight="500"
                leftIcon={LogOutIcon}
                variant="link"
                onClick={signOut}
              >
                {t("common.exit")}
              </IconButton>
            </Stack>
          </Flex>
        </Content>
      </Flex>
      <Tabs size="lg" variantColor="primary">
        <Stack
          isInline
          alignItems="center"
          backgroundColor="gray.100"
          borderBottom="1px solid"
          borderColor="gray.200"
          height="100%"
          spacing={4}
        >
          <Content paddingX={4}>
            <Box height="100%" width="100%">
              <TabList border="none" height={16}>
                <Tab fontSize="md" fontWeight={500}>
                  <BoxIcon marginRight={2} />
                  <Text>{t("common.products")}</Text>
                </Tab>
                <Tab fontSize="md" fontWeight={500}>
                  <SlidersIcon marginRight={2} />
                  <Text>{t("common.shop")}</Text>
                </Tab>
              </TabList>
            </Box>
          </Content>
        </Stack>
        <Box>
          <TabPanels>
            <TabPanel>
              <ProductsAdminScreen />
            </TabPanel>
            <TabPanel>
              <TenantAdminScreen />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default AdminScreen;
